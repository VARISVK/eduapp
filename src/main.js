import { questionPools } from './data/questions.js';
import { supabase } from './lib/supabase.js';
import { VoiceManager } from './lib/webrtc.js';

// Global Voice Manager
let voiceManager = null;

// Session Management
const sessionId = crypto.randomUUID();
let lobbyChannel = null;

// State Management
let state = {
    user: {
        id: 'user',
        name: '',
        gender: '',
        paper: '',
        phone: '',
        lastScore: 0,
        institute: '',
        gmail: '',
        score: 0,
        supabaseId: null,
        avatar: '/avatars/male2.png',
        lastAnswerStatus: null // 'correct', 'wrong', or null
    },
    buddy: null,
    currentQuestionIndex: 0,
    currentQuestions: [],
    timer: null,
    timeLeft: 108,
    isAnswered: false,
    botActions: [],
    isMatchfound: false,
    matchTimeout: null,
    authMode: 'signup', // 'signup' or 'login'
    voice: {
        isLocalSpeaking: false,
        isRemoteSpeaking: false,
        isMuted: false
    }
};

// DOM Elements
const views = {
    onboarding: document.getElementById('onboarding-view'),
    matchmaking: document.getElementById('matchmaking-view'),
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view')
};

// --- View Transitions ---
function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
}

// --- Real-time Logic ---
function initLobby() {
    lobbyChannel = supabase.channel('global_lobby', {
        config: { presence: { key: sessionId } }
    });

    lobbyChannel
        .on('broadcast', { event: 'match-proposal' }, payload => {
            handleMatchProposal(payload);
        })
        .on('broadcast', { event: 'match-accept' }, payload => {
            handleMatchAccept(payload);
        })
        .on('broadcast', { event: 'score-update' }, payload => {
            if (state.buddy && payload.sessionId === state.buddy.sessionId) {
                state.buddy.score = payload.score;
                state.buddy.status = payload.status;
                state.buddy.lastAnswerStatus = payload.lastAnswerStatus;
                updateScores();
            }
        })
        .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await lobbyChannel.track({
                    name: state.user.name || 'Anonymous',
                    paper: state.user.paper,
                    status: 'idle',
                    joined_at: new Date().toISOString()
                });
                
                // Initialize Voice Manager
                initVoice();
            }
        });
}

function initVoice() {
    voiceManager = new VoiceManager(lobbyChannel, sessionId, {
        onRemoteStream: (stream) => {
            const remoteAudio = document.getElementById('remote-audio');
            if (remoteAudio) remoteAudio.srcObject = stream;
        },
        onLocalSpeaking: (isSpeaking) => {
            if (state.voice.isLocalSpeaking !== isSpeaking) {
                state.voice.isLocalSpeaking = isSpeaking;
                updateVoiceUI();
                renderBuddy();
            }
        },
        onRemoteSpeaking: (isSpeaking) => {
            if (state.voice.isRemoteSpeaking !== isSpeaking) {
                state.voice.isRemoteSpeaking = isSpeaking;
                renderBuddy();
            }
        }
    });

    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
        muteBtn.onclick = () => {
            const isMuted = voiceManager.toggleMute();
            state.voice.isMuted = isMuted;
            updateVoiceUI();
        };
    }
}

function updateVoiceUI() {
    const indicator = document.getElementById('local-voice-indicator');
    const onIcon = document.getElementById('mic-on-icon');
    const offIcon = document.getElementById('mic-off-icon');
    const muteBtn = document.getElementById('mute-btn');

    if (indicator) {
        if (state.voice.isLocalSpeaking) indicator.classList.add('speaking');
        else indicator.classList.remove('speaking');
    }

    if (state.voice.isMuted) {
        onIcon.style.display = 'none';
        offIcon.style.display = 'block';
        muteBtn.classList.add('muted');
    } else {
        onIcon.style.display = 'block';
        offIcon.style.display = 'none';
        muteBtn.classList.remove('muted');
    }
}

// Global initialization
initLobby();

// --- Auth Mode Toggle ---
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const onboardingForm = document.getElementById('onboarding-form');
const authSubmitBtn = document.getElementById('auth-submit');
const identifierLabel = document.getElementById('identifier-label');
const authError = document.getElementById('auth-error');

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    state.authMode = state.authMode === 'signup' ? 'login' : 'signup';
    
    if (state.authMode === 'login') {
        onboardingForm.classList.add('onboarding-login-mode');
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = "Sign Up";
        authSubmitBtn.textContent = "Login";
        identifierLabel.textContent = "Gmail ID or Phone Number";
        // Remove required attribute from fields that are hidden
        onboardingForm.querySelectorAll('.signup-only input, .signup-only select').forEach(el => el.required = false);
    } else {
        onboardingForm.classList.remove('onboarding-login-mode');
        toggleText.textContent = "Already have an account?";
        toggleLink.textContent = "Login";
        authSubmitBtn.textContent = "Find a Buddy";
        identifierLabel.textContent = "Gmail ID";
        // Restore required attribute
    }
    authError.style.display = 'none';
});

// --- Logout / Reset ---
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to exit the quiz?')) {
            window.location.reload();
        }
    });
}

// --- Onboarding ---
onboardingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    authError.style.display = 'none';

    const btn = document.getElementById('auth-submit');
    const originalText = btn.textContent;
    btn.textContent = state.authMode === 'signup' ? 'Saving...' : 'Logging in...';
    btn.disabled = true;

    if (state.authMode === 'signup') {
        await handleSignup(btn, originalText);
    } else {
        await handleLogin(btn, originalText);
    }
});

async function handleSignup(btn, originalText) {
    state.user.name = document.getElementById('username').value;
    state.user.phone = document.getElementById('phone').value;
    state.user.gmail = document.getElementById('gmail').value;
    state.user.paper = document.getElementById('current-paper').value;
    state.user.lastScore = Number(document.getElementById('last-score').value) || 0;
    state.user.institute = document.getElementById('institute').value;
    state.user.gender = 'unspecified';
    state.user.avatar = '/avatars/male2.png';
    
    try {
        const { data, error } = await supabase
            .from('study_buddy_users')
            .insert([{
                name: state.user.name,
                gmail: state.user.gmail,
                phone: state.user.phone,
                paper: state.user.paper,
                last_score: state.user.lastScore,
                institute: state.user.institute,
                gender: state.user.gender,
                final_score: 0
            }])
            .select();

        if (error) throw error;
        if (data && data[0]) {
            state.user.supabaseId = data[0].id;
            proceedToMatchmaking();
        }
    } catch (err) {
        console.error('Error saving to Supabase:', err);
        authError.textContent = "Error creating account. Please try again.";
        authError.style.display = 'block';
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

async function handleLogin(btn, originalText) {
    const identifier = document.getElementById('gmail').value.trim();
    
    try {
        // Query by either Gmail or Phone
        const { data, error } = await supabase
            .from('study_buddy_users')
            .select('*')
            .or(`gmail.eq."${identifier}",phone.eq."${identifier}"`)
            .maybeSingle();

        if (error) throw error;
        
        if (data) {
            // Populate state from retrieved user
            state.user.supabaseId = data.id;
            state.user.name = data.name;
            state.user.gmail = data.gmail;
            state.user.phone = data.phone;
            state.user.paper = data.paper;
            state.user.lastScore = data.last_score;
            state.user.institute = data.institute;
            state.user.gender = data.gender || 'unspecified';
            state.user.avatar = data.gender === 'female' ? '/avatars/female2.png' : '/avatars/male2.png';
            
            proceedToMatchmaking();
        } else {
            authError.textContent = "Account not found. Use Gmail or Phone used during signup.";
            authError.style.display = 'block';
        }
    } catch (err) {
        console.error('Error logging in:', err);
        authError.textContent = "Login connection failed. Please try again.";
        authError.style.display = 'block';
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

function proceedToMatchmaking() {
    updatePaperSpecificUI();
    setupBuddy();
    startMatchmaking();
    
    if (lobbyChannel) {
        lobbyChannel.track({
            name: state.user.name,
            paper: state.user.paper,
            status: 'searching',
            sessionId: sessionId,
            joined_at: new Date().toISOString()
        });
    }
}

function updatePaperSpecificUI() {
    const paper = state.user.paper;
    const paperNames = {
        'TX': 'Taxation',
        'FM': 'Financial Management',
        'AFM': 'Advanced Financial Management',
        'PM': 'Performance Management',
        'APM': 'Advanced Performance Management',
        'AA': 'Audit and Assurance',
        'FR': 'Financial Reporting',
        'SBR': 'Strategic Business Reporting',
        'MA': 'Management Accounting',
        'FA': 'Financial Accounting',
        'BT': 'Business and Technology',
        'LW': 'Corporate and Business Law',
        'SBL': 'Strategic Business Leader'
    };
    const paperName = paperNames[paper] || paper;
    
    const onboardingSubtitle = document.getElementById('onboarding-subtitle');
    if (onboardingSubtitle) {
        onboardingSubtitle.textContent = `Ace your ${paperName.toLowerCase()} exam with a companion.`;
    }
    
    const matchmakingSubtitle = document.getElementById('matchmaking-subtitle');
    if (matchmakingSubtitle) {
        matchmakingSubtitle.textContent = `Matching you with a ${paperName.toLowerCase()} expert.`;
    }
}

document.getElementById('current-paper').addEventListener('change', (e) => {
    state.user.paper = e.target.value;
    updatePaperSpecificUI();
});

function setupBuddy() {
    const femalePool = [
        { name: 'Lidiya T. Abraham', avatar: '/avatars/female1.png', skillLevel: 0.86 },
        { name: 'Sneha V.P.', avatar: '/avatars/female2.png', skillLevel: 0.94 },
        { name: 'Ciya Susan', avatar: '/avatars/female3.png', skillLevel: 0.61 },
        { name: 'Aaliyah Khan', avatar: '/avatars/female1.png', skillLevel: 0.93 },
        { name: 'Joanna Mary', avatar: '/avatars/female2.png', skillLevel: 0.64 },
        { name: 'Zara Fathima', avatar: '/avatars/female3.png', skillLevel: 0.87 },
        { name: 'Ivana J.', avatar: '/avatars/female1.png', skillLevel: 0.92 },
        { name: 'Anaya R.', avatar: '/avatars/female2.png', skillLevel: 0.74 },
        { name: 'Meenakshi S.', avatar: '/avatars/female3.png', skillLevel: 0.87 },
        { name: 'Diya Kurup', avatar: '/avatars/female1.png', skillLevel: 0.89 },
        { name: 'Saanvi Varma', avatar: '/avatars/female2.png', skillLevel: 0.81 },
        { name: 'Navya Abraham', avatar: '/avatars/female3.png', skillLevel: 0.87 },
        { name: 'Elsa Manuel', avatar: '/avatars/female1.png', skillLevel: 0.89 },
        { name: 'Hanna M.', avatar: '/avatars/female2.png', skillLevel: 0.74 },
        { name: 'Sandra Nair', avatar: '/avatars/female3.png', skillLevel: 0.75 },
        { name: 'Kavya Madhavan', avatar: '/avatars/female1.png', skillLevel: 0.61 },
        { name: 'Maria Joseph', avatar: '/avatars/female2.png', skillLevel: 0.86 },
        { name: 'Ashly K.', avatar: '/avatars/female3.png', skillLevel: 0.79 },
        { name: 'Shifa A.', avatar: '/avatars/female1.png', skillLevel: 0.94 },
        { name: 'Isha R.', avatar: '/avatars/female2.png', skillLevel: 0.87 },
        { name: 'Devi S.', avatar: '/avatars/female3.png', skillLevel: 0.64 },
        { name: 'Meera K.', avatar: '/avatars/female1.png', skillLevel: 0.75 },
        { name: 'Parvathy G.', avatar: '/avatars/female2.png', skillLevel: 0.71 },
        { name: 'Gouri T.', avatar: '/avatars/female3.png', skillLevel: 0.78 },
        { name: 'Shamna S.', avatar: '/avatars/female1.png', skillLevel: 0.91 },
        { name: 'Nihala R.', avatar: '/avatars/female2.png', skillLevel: 0.85 },
        { name: 'Fathima Z.', avatar: '/avatars/female3.png', skillLevel: 0.85 },
        { name: 'Riya K.', avatar: '/avatars/female1.png', skillLevel: 0.81 },
        { name: 'Ameya S.', avatar: '/avatars/female2.png', skillLevel: 0.61 },
        { name: 'Ishita N.', avatar: '/avatars/female3.png', skillLevel: 0.79 },
        { name: 'Brielle D.', avatar: '/avatars/female1.png', skillLevel: 0.67 },
        { name: 'Davina E.', avatar: '/avatars/female2.png', skillLevel: 0.67 },
        { name: 'Eliana J.', avatar: '/avatars/female3.png', skillLevel: 0.88 }
    ];
    const malePool = [
        { name: 'Midhun V.P.', avatar: '/avatars/male1.png', skillLevel: 0.86 },
        { name: 'Abhishek Shanty', avatar: '/avatars/male2.png', skillLevel: 0.91 },
        { name: 'Rayyan Ahmed', avatar: '/avatars/male3.png', skillLevel: 0.67 },
        { name: 'Nathan K. George', avatar: '/avatars/male1.png', skillLevel: 0.70 },
        { name: 'Ishan K.', avatar: '/avatars/male2.png', skillLevel: 0.84 },
        { name: 'Zayan Muhammed', avatar: '/avatars/male3.png', skillLevel: 0.71 },
        { name: 'Aiden Kurian', avatar: '/avatars/male1.png', skillLevel: 0.76 },
        { name: 'Vihaan Nair', avatar: '/avatars/male2.png', skillLevel: 0.75 },
        { name: 'Lijo K. Joseph', avatar: '/avatars/male3.png', skillLevel: 0.82 },
        { name: 'Aadith Nair', avatar: '/avatars/male1.png', skillLevel: 0.80 },
        { name: 'Advaith V.', avatar: '/avatars/male2.png', skillLevel: 0.81 },
        { name: 'Vivaan P.', avatar: '/avatars/male3.png', skillLevel: 0.94 },
        { name: 'Arjun K.', avatar: '/avatars/male1.png', skillLevel: 0.79 },
        { name: 'Rohan Varghese', avatar: '/avatars/male2.png', skillLevel: 0.79 },
        { name: 'Siddharth P.', avatar: '/avatars/male3.png', skillLevel: 0.74 },
        { name: 'Arav S.', avatar: '/avatars/male1.png', skillLevel: 0.69 },
        { name: 'Darsh M.', avatar: '/avatars/male2.png', skillLevel: 0.72 },
        { name: 'Gokul R.', avatar: '/avatars/male3.png', skillLevel: 0.87 },
        { name: 'Amal J.', avatar: '/avatars/male1.png', skillLevel: 0.64 },
        { name: 'Abhijith S.', avatar: '/avatars/male2.png', skillLevel: 0.84 },
        { name: 'Alan B.', avatar: '/avatars/male3.png', skillLevel: 0.78 },
        { name: 'Joel Abraham', avatar: '/avatars/male1.png', skillLevel: 0.70 },
        { name: 'Cyril K.', avatar: '/avatars/male2.png', skillLevel: 0.86 },
        { name: 'Irfan S.', avatar: '/avatars/male3.png', skillLevel: 0.64 },
        { name: 'Ashik R.', avatar: '/avatars/male1.png', skillLevel: 0.83 },
        { name: 'Salman F.', avatar: '/avatars/male2.png', skillLevel: 0.65 },
        { name: 'Rahul R. Kartha', avatar: '/avatars/male3.png', skillLevel: 0.87 },
        { name: 'Navaneeth K.S.', avatar: '/avatars/male1.png', skillLevel: 0.88 },
        { name: 'Muhammed Farhan', avatar: '/avatars/male2.png', skillLevel: 0.66 },
        { name: 'Adithyan B.', avatar: '/avatars/male3.png', skillLevel: 0.64 },
        { name: 'Jinto Joseph', avatar: '/avatars/male1.png', skillLevel: 0.63 },
        { name: 'Sree Hari', avatar: '/avatars/male2.png', skillLevel: 0.82 },
        { name: 'Akhil Das', avatar: '/avatars/male3.png', skillLevel: 0.84 }
    ];

    let pool = [...femalePool, ...malePool];
    const selected = pool[Math.floor(Math.random() * pool.length)];

    state.buddy = {
        id: 'buddy-1',
        ...selected,
        score: 0,
        status: 'Thinking...',
        isReal: false,
        lastAnswerStatus: null
    };
}

function startMatchmaking() {
    state.isMatchfound = false;
    showView('matchmaking');
    
    const statusText = document.querySelector('#matchmaking-view h2');
    const subtitle = document.querySelector('#matchmaking-view p');
    
    statusText.textContent = "Searching for real players...";
    searchForRealPlayer();

    state.matchTimeout = setTimeout(() => {
        if (!state.isMatchfound) {
            statusText.textContent = "Buddy Found!";
            subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Bot Fallback)`;
            setTimeout(() => { startQuiz(); }, 2500);
        }
    }, 5000);
}

function searchForRealPlayer() {
    const presenceState = lobbyChannel.presenceState();
    const candidates = [];

    Object.entries(presenceState).forEach(([key, presences]) => {
        if (key === sessionId) return;
        presences.forEach(p => {
            if (p.status === 'searching' && p.paper === state.user.paper) {
                candidates.push({ sessionId: key, ...p });
            }
        });
    });

    if (candidates.length > 0) {
        const target = candidates[Math.floor(Math.random() * candidates.length)];
        lobbyChannel.send({
            type: 'broadcast',
            event: 'match-proposal',
            payload: {
                targetSessionId: target.sessionId,
                senderSessionId: sessionId,
                senderName: state.user.name,
                senderPaper: state.user.paper
            }
        });
    }
}

function handleMatchProposal(payload) {
    if (payload.targetSessionId !== sessionId) return;
    if (state.isMatchfound) return;
    if (views.matchmaking.classList.contains('active')) {
        state.isMatchfound = true;
        if (state.matchTimeout) clearTimeout(state.matchTimeout);

        state.buddy = {
            id: payload.senderSessionId,
            sessionId: payload.senderSessionId,
            name: payload.senderName,
            avatar: '/avatars/male1.png',
            score: 0,
            status: 'Thinking...',
            isReal: true,
            lastAnswerStatus: null
        };

        const statusText = document.querySelector('#matchmaking-view h2');
        const subtitle = document.querySelector('#matchmaking-view p');
        statusText.textContent = "Connection Established!";
        subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Live Player)`;

        lobbyChannel.send({
            type: 'broadcast',
            event: 'match-accept',
            payload: {
                targetSessionId: payload.senderSessionId,
                senderSessionId: sessionId,
                senderName: state.user.name
            }
        });

        setTimeout(async () => { 
            if (voiceManager) {
                await voiceManager.startLocalStream();
                voiceManager.setupPeerConnection(payload.senderSessionId, false);
                document.getElementById('voice-controls').style.display = 'flex';
            }
            startQuiz(); 
        }, 2000);
    }
}

function handleMatchAccept(payload) {
    if (payload.targetSessionId !== sessionId) return;
    if (state.isMatchfound) return;

    state.isMatchfound = true;
    if (state.matchTimeout) clearTimeout(state.matchTimeout);

    state.buddy = {
        id: payload.senderSessionId,
        sessionId: payload.senderSessionId,
        name: payload.senderName,
        avatar: '/avatars/female1.png',
        score: 0,
        status: 'Thinking...',
        isReal: true,
        lastAnswerStatus: null
    };

    const statusText = document.querySelector('#matchmaking-view h2');
    const subtitle = document.querySelector('#matchmaking-view p');
    statusText.textContent = "Connection Established!";
    subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Live Player)`;

    setTimeout(async () => { 
        if (voiceManager) {
            await voiceManager.startLocalStream();
            voiceManager.setupPeerConnection(payload.senderSessionId, true);
            document.getElementById('voice-controls').style.display = 'flex';
        }
        startQuiz(); 
    }, 2000);
}

function startQuiz() {
    const paper = state.user.paper;
    if (paper === 'FM' || paper === 'AFM') {
        state.currentQuestions = questionPools.FM;
    } else if (paper === 'PM' || paper === 'APM') {
        state.currentQuestions = questionPools.PM;
    } else if (paper === 'AA') {
        state.currentQuestions = questionPools.AA;
    } else if (paper === 'FR' || paper === 'SBR') {
        state.currentQuestions = questionPools.FR;
    } else {
        state.currentQuestions = questionPools.TX;
    }
    
    if (lobbyChannel) {
        lobbyChannel.track({
            name: state.user.name,
            paper: state.user.paper,
            status: 'in-game',
            sessionId: sessionId,
            joined_at: new Date().toISOString()
        });
    }

    showView('quiz');
    renderQuestion();
}

function renderQuestion() {
    state.isAnswered = false;
    state.user.lastAnswerStatus = null;
    state.buddy.lastAnswerStatus = null;
    state.buddy.status = 'Thinking...';
    state.timeLeft = 108;
    
    const question = state.currentQuestions[state.currentQuestionIndex];
    if (!question) { finishQuiz(); return; }

    const container = document.getElementById('question-container');
    container.innerHTML = '';
    
    container.classList.remove('question-slide');
    void container.offsetWidth;
    container.classList.add('question-slide');

    document.getElementById('question-counter').textContent = `Question ${state.currentQuestionIndex + 1}/${state.currentQuestions.length}`;
    document.documentElement.style.setProperty('--progress', `${((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100}%`);

    const qText = document.createElement('h2');
    qText.className = 'question-text';
    qText.textContent = question.text;
    container.appendChild(qText);

    if (question.type === 'mcq' || question.type === 'multi-select') {
        renderMCQ(container, question);
    } else if (question.type === 'categorization') {
        renderCategorization(container, question);
    } else if (question.type === 'input') {
        renderInput(container, question);
    }

    renderBuddy();
    startTimer();
    simulateBuddy();
}

function renderMCQ(container, question) {
    const isMulti = question.type === 'multi-select';
    const grid = document.createElement('div');
    grid.className = 'choices-grid';
    
    const selectedChoices = new Set();
    Object.entries(question.choices).forEach(([key, val]) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.dataset.key = key;
        btn.innerHTML = `<span class="choice-letter">${key}</span> <span>${val}</span>`;
        btn.onclick = () => {
            if (state.isAnswered) return;
            if (isMulti) {
                btn.classList.toggle('selected');
                btn.classList.contains('selected') ? selectedChoices.add(key) : selectedChoices.delete(key);
            } else {
                handleAnswer(key, btn);
            }
        };
        grid.appendChild(btn);
    });
    container.appendChild(grid);
    if (isMulti) {
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn primary submit-multi-btn';
        submitBtn.textContent = 'Submit Answer';
        submitBtn.onclick = () => {
            if (selectedChoices.size === 0) return;
            handleAnswer(Array.from(selectedChoices).sort(), null);
        };
        container.appendChild(submitBtn);
    }
}

function renderCategorization(container, question) {
    const table = document.createElement('table');
    table.className = 'cat-table';
    const header = document.createElement('tr');
    header.innerHTML = `<th>Item</th><th>Action</th>`;
    table.appendChild(header);
    const userChoices = {};
    question.items.forEach(item => {
        const row = document.createElement('tr');
        const itemCell = document.createElement('td');
        itemCell.textContent = item.text;
        const actionCell = document.createElement('td');
        const optGrid = document.createElement('div');
        optGrid.className = 'cat-options';
        question.options.forEach(opt => {
            const optBtn = document.createElement('button');
            optBtn.className = 'cat-option-btn';
            optBtn.textContent = opt;
            optBtn.onclick = () => {
                const siblings = optGrid.querySelectorAll('.cat-option-btn');
                siblings.forEach(s => s.classList.remove('selected'));
                optBtn.classList.add('selected');
                userChoices[item.id] = opt;
                if (Object.keys(userChoices).length === question.items.length) {
                    handleCategorizationAnswer(userChoices);
                }
            };
            optGrid.appendChild(optBtn);
        });
        actionCell.appendChild(optGrid);
        row.appendChild(itemCell);
        row.appendChild(actionCell);
        table.appendChild(row);
    });
    container.appendChild(table);
}

function renderInput(container, question) {
    const wrapper = document.createElement('div');
    wrapper.className = 'input-container';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-field';
    input.placeholder = 'Value...';
    const submit = document.createElement('button');
    submit.className = 'btn primary';
    submit.textContent = 'Submit';
    submit.onclick = () => handleAnswer(input.value.trim(), input);
    wrapper.appendChild(input);
    wrapper.appendChild(submit);
    container.appendChild(wrapper);
}

function handleAnswer(choiceId, element) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    const question = state.currentQuestions[state.currentQuestionIndex];
    let isCorrect = false;
    if (Array.isArray(question.answer)) {
        const userAns = Array.isArray(choiceId) ? choiceId.sort() : [choiceId];
        const correctAns = [...question.answer].sort();
        isCorrect = JSON.stringify(userAns.map(a => a.toLowerCase())) === JSON.stringify(correctAns.map(a => a.toLowerCase()));
    } else {
        isCorrect = (choiceId.toString().toLowerCase() === question.answer.toString().toLowerCase());
    }
    if (isCorrect) {
        state.user.lastAnswerStatus = 'correct';
        state.user.score += calculatePoints();
        if (element) element.classList.add('correct');
        if (Array.isArray(question.answer)) {
            const btns = document.querySelectorAll('.choice-btn');
            btns.forEach(b => { if (question.answer.includes(b.dataset.key)) b.classList.add('correct'); });
        }
    } else {
        state.user.lastAnswerStatus = 'wrong';
        state.user.score -= 500;
        if (element) element.classList.add('wrong');
        const btns = document.querySelectorAll('.choice-btn');
        btns.forEach(b => {
            const isCorrectOption = Array.isArray(question.answer) ? question.answer.includes(b.dataset.key) : b.dataset.key === question.answer;
            if (isCorrectOption) b.classList.add('correct');
            else if (b.classList.contains('selected') || b === element) b.classList.add('wrong');
        });
    }
    updateScores();
    checkBothAnswered();
}

function handleCategorizationAnswer(choices) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    const question = state.currentQuestions[state.currentQuestionIndex];
    let correctCount = 0;
    question.items.forEach(item => { if (choices[item.id] === item.answer) correctCount++; });
    if (correctCount === question.items.length) {
        state.user.lastAnswerStatus = 'correct';
        state.user.score += calculatePoints();
    } else {
        state.user.lastAnswerStatus = 'wrong';
        state.user.score -= 500;
    }
    updateScores();
    checkBothAnswered();
}

function calculatePoints() { return Math.round(1000 + (state.timeLeft / 108) * 500); }

function checkBothAnswered() { if (state.isAnswered && state.buddy.status === 'Answered!') nextQuestion(); }

function nextQuestion() {
    if (state.timer) clearInterval(state.timer);
    stopBotSimulation();
    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < state.currentQuestions.length) renderQuestion();
        else finishQuiz();
    }, 2000);
}

function renderBuddy() {
    const list = document.getElementById('competitors-list');
    list.innerHTML = '';
    const players = [ { ...state.user, isUser: true }, { ...state.buddy, isUser: false } ].sort((a, b) => b.score - a.score);
    players.forEach(player => {
        const item = document.createElement('div');
        item.className = `competitor-item ${player.isUser ? 'user' : ''}`;
        let statusClass = '';
        if (player.status === 'Thinking...') statusClass = 'thinking';
        if (player.lastAnswerStatus === 'correct') statusClass = 'correct';
        if (player.lastAnswerStatus === 'wrong') statusClass = 'wrong';
        const isSpeaking = player.isUser ? state.voice.isLocalSpeaking : state.voice.isRemoteSpeaking;
        
        item.innerHTML = `
            <div class="comp-avatar-wrapper ${isSpeaking ? 'speaking' : ''}">
                <img src="${player.avatar}" class="comp-avatar">
                <div class="status-dot ${statusClass}"></div>
            </div>
            <div class="comp-info">
                <span class="comp-name">
                    ${player.name || 'You'} 
                    ${!player.isUser ? '' : `<span class="user-details">(${state.user.paper} | ${state.user.lastScore}% | ${state.user.institute})</span>`}
                </span>
                <span class="comp-status">${player.isUser ? (state.isAnswered ? 'Answered' : 'Thinking...') : player.status}</span>
            </div>
            <div class="comp-score">${player.score}</div>
        `;
        list.appendChild(item);
    });
}

function updateScores() {
    document.getElementById('user-score-header').textContent = state.user.score;
    document.getElementById('buddy-score-header').textContent = state.buddy.score;
    renderBuddy();
    if (state.buddy.isReal && lobbyChannel) {
        lobbyChannel.send({
            type: 'broadcast',
            event: 'score-update',
            payload: { sessionId: sessionId, score: state.user.score, status: state.isAnswered ? 'Answered!' : 'Thinking...', lastAnswerStatus: state.user.lastAnswerStatus }
        });
    }
}

function simulateBuddy() {
    if (state.buddy.isReal) return;
    state.buddy.status = 'Thinking...';
    state.botActions.forEach(timeout => clearTimeout(timeout));
    state.botActions = [];
    const thinkingTime = (Math.random() * 80 + 10) * 1000;
    const action = setTimeout(() => {
        const isCorrect = Math.random() < state.buddy.skillLevel;
        if (isCorrect) {
            state.buddy.lastAnswerStatus = 'correct';
            const botTimeLeft = Math.max(0, 108 - (thinkingTime / 1000));
            state.buddy.score += Math.round(1000 + (botTimeLeft / 108) * 500);
        } else {
            state.buddy.lastAnswerStatus = 'wrong';
            state.buddy.score -= 500;
        }
        state.buddy.status = 'Answered!';
        updateScores();
        checkBothAnswered();
    }, thinkingTime);
    state.botActions.push(action);
}

function stopBotSimulation() { state.botActions.forEach(timeout => clearTimeout(timeout)); state.botActions = []; }

function startTimer() {
    const circle = document.getElementById('timer-circle');
    const text = document.getElementById('timer-text');
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(() => {
        state.timeLeft -= 1;
        text.textContent = state.timeLeft;
        const offset = circumference - (state.timeLeft / 108) * circumference;
        circle.style.strokeDashoffset = offset;
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            if (!state.isAnswered || state.buddy.status !== 'Answered!') nextQuestion();
        }
    }, 1000);
}

async function finishQuiz() {
    if (voiceManager) {
        voiceManager.stop();
        document.getElementById('voice-controls').style.display = 'none';
    }
    showView('results');
    const finalLeaderboard = document.getElementById('final-leaderboard');
    finalLeaderboard.innerHTML = '';
    const sorted = [ { ...state.user, isUser: true }, { ...state.buddy, isUser: false } ].sort((a, b) => b.score - a.score);
    sorted.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = `rank-item ${index === 0 ? 'winner' : ''}`;
        item.innerHTML = `
            <div class="hero-info"><span class="rank">#${index + 1}</span><span class="hero-name">${player.name || 'You'}</span></div>
            <span class="hero-score">${player.score}</span>
        `;
        finalLeaderboard.appendChild(item);
    });
    if (state.user.supabaseId) {
        try { await supabase.from('study_buddy_users').update({ final_score: state.user.score }).eq('id', state.user.supabaseId); }
        catch (err) { console.error('Error updating final score:', err); }
    }
}
