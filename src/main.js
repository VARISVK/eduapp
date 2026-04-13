import { questionPools } from './data/questions.js';
import { supabase } from './lib/supabase.js';

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
    matchTimeout: null
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
        .on('presence', { event: 'sync' }, () => {
            const state = lobbyChannel.presenceState();
            const count = Object.keys(state).length;
            const counter = document.getElementById('online-count');
            if (counter) counter.textContent = count;
        })
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
            }
        });
}

// Global initialization
initLobby();

// --- Onboarding ---
document.getElementById('onboarding-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Saving...';
    btn.disabled = true;

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
        }
    } catch (err) {
        console.error('Error saving to Supabase:', err);
        // We continue even if DB fails to not block user experience, 
        // but ideally we'd show a toast here.
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
    
    setupBuddy();
    startMatchmaking();
    
    // Update presence to searching
    if (lobbyChannel) {
        lobbyChannel.track({
            name: state.user.name,
            paper: state.user.paper,
            status: 'searching',
            sessionId: sessionId,
            joined_at: new Date().toISOString()
        });
    }
});

function setupBuddy() {
    const femalePool = [
        { name: 'Aadhya', avatar: '/avatars/female1.png', skillLevel: 0.9 },
        { name: 'Suhana', avatar: '/avatars/female2.png', skillLevel: 0.75 },
        { name: 'Sara', avatar: '/avatars/female3.png', skillLevel: 0.65 },
        { name: 'Ananya', avatar: '/avatars/female1.png', skillLevel: 0.85 },
        { name: 'Ziya', avatar: '/avatars/female2.png', skillLevel: 0.7 },
        { name: 'Niya', avatar: '/avatars/female3.png', skillLevel: 0.8 },
        { name: 'Diya', avatar: '/avatars/female1.png', skillLevel: 0.6 },
        { name: 'Zara', avatar: '/avatars/female2.png', skillLevel: 0.95 },
        { name: 'Elena', avatar: '/avatars/female3.png', skillLevel: 0.7 }
    ];
    const malePool = [
        { name: 'Aarav', avatar: '/avatars/male1.png', skillLevel: 0.9 },
        { name: 'Farhan', avatar: '/avatars/male2.png', skillLevel: 0.75 },
        { name: 'Nivin', avatar: '/avatars/male3.png', skillLevel: 0.65 },
        { name: 'Arjun', avatar: '/avatars/male1.png', skillLevel: 0.85 },
        { name: 'Rehan', avatar: '/avatars/male2.png', skillLevel: 0.7 },
        { name: 'Kevin', avatar: '/avatars/male3.png', skillLevel: 0.82 },
        { name: 'Adithya', avatar: '/avatars/male1.png', skillLevel: 0.68 },
        { name: 'Mohammed', avatar: '/avatars/male2.png', skillLevel: 0.9 },
        { name: 'Liyon', avatar: '/avatars/male3.png', skillLevel: 0.75 }
    ];

    // Selection Pool
    let pool = [];
    if (state.user.gender === 'unspecified') {
        pool = [...femalePool, ...malePool];
    } else {
        pool = state.user.gender === 'male' ? femalePool : malePool;
    }
    
    const selected = pool[Math.floor(Math.random() * pool.length)];
    
    // Simulate "Real person" vs "Bot"
    const isRealPerson = Math.random() > 0.2; // 80% chance of 'Real Person'

    state.buddy = {
        id: 'buddy-1',
        ...selected,
        score: 0,
        status: 'Thinking...',
        isReal: isRealPerson,
        tag: isRealPerson ? 'ONLINE' : 'BOT',
        lastAnswerStatus: null
    };
}

function startMatchmaking() {
    state.isMatchfound = false;
    showView('matchmaking');
    
    const statusText = document.querySelector('#matchmaking-view h2');
    const subtitle = document.querySelector('#matchmaking-view p');
    
    statusText.textContent = "Searching for real players...";
    
    // Look for real players immediately
    searchForRealPlayer();

    // Fallback to bot after 5 seconds
    state.matchTimeout = setTimeout(() => {
        if (!state.isMatchfound) {
            statusText.textContent = "Buddy Found!";
            subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Bot Fallback)`;
            
            setTimeout(() => {
                startQuiz();
            }, 2500);
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
        // Pick random real candidate
        const target = candidates[Math.floor(Math.random() * candidates.length)];
        
        // Send proposal
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
    if (state.isMatchfound) return; // Already matched
    if (views.matchmaking.classList.contains('active')) {
        // Accept automatically if we are searching
        state.isMatchfound = true;
        if (state.matchTimeout) clearTimeout(state.matchTimeout);

        // Update buddy info to the real person
        state.buddy = {
            id: payload.senderSessionId,
            sessionId: payload.senderSessionId,
            name: payload.senderName,
            avatar: '/avatars/male1.png', // Generic for now
            score: 0,
            status: 'Thinking...',
            isReal: true,
            lastAnswerStatus: null
        };

        const statusText = document.querySelector('#matchmaking-view h2');
        const subtitle = document.querySelector('#matchmaking-view p');
        statusText.textContent = "Connection Established!";
        subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Live Player)`;

        // Send accept
        lobbyChannel.send({
            type: 'broadcast',
            event: 'match-accept',
            payload: {
                targetSessionId: payload.senderSessionId,
                senderSessionId: sessionId,
                senderName: state.user.name
            }
        });

        setTimeout(() => {
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
        avatar: '/avatars/female1.png', // Generic
        score: 0,
        status: 'Thinking...',
        isReal: true,
        lastAnswerStatus: null
    };

    const statusText = document.querySelector('#matchmaking-view h2');
    const subtitle = document.querySelector('#matchmaking-view p');
    statusText.textContent = "Connection Established!";
    subtitle.innerHTML = `Matched with <strong>${state.buddy.name}</strong> (Live Player)`;

    setTimeout(() => {
        startQuiz();
    }, 2000);
}

// --- Quiz Logic ---
function startQuiz() {
    const paper = state.user.paper;
    // FM and AFM use the same pool
    if (paper === 'FM' || paper === 'AFM') {
        state.currentQuestions = questionPools.FM;
    } else {
        state.currentQuestions = questionPools.TX;
    }
    
    // Update presence to in-game
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
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    
    // Add slide animation
    container.classList.remove('question-slide');
    void container.offsetWidth; // trigger reflow
    container.classList.add('question-slide');

    // Update Counter & Progress
    document.getElementById('question-counter').textContent = `Question ${state.currentQuestionIndex + 1}/${state.currentQuestions.length}`;
    document.documentElement.style.setProperty('--progress', `${((state.currentQuestionIndex + 1) / state.currentQuestions.length) * 100}%`);

    // Question Text
    const qText = document.createElement('h2');
    qText.className = 'question-text';
    qText.textContent = question.text;
    container.appendChild(qText);

    // Render based on type
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
    const grid = document.createElement('div');
    grid.className = 'choices-grid';

    Object.entries(question.choices).forEach(([key, val]) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<span class="choice-letter">${key}</span> <span>${val}</span>`;
        btn.onclick = () => handleAnswer(key, btn);
        grid.appendChild(btn);
    });

    container.appendChild(grid);
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

// --- Interaction Handlers ---
function handleAnswer(choiceId, element) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    const question = state.currentQuestions[state.currentQuestionIndex];
    let isCorrect = (choiceId.toString().toLowerCase() === question.answer.toString().toLowerCase());

    if (isCorrect) {
        state.user.lastAnswerStatus = 'correct';
        state.user.score += calculatePoints();
        if (element && element.classList.contains('choice-btn')) element.classList.add('correct');
    } else {
        state.user.lastAnswerStatus = 'wrong';
        state.user.score -= 500;
        if (element && element.classList.contains('choice-btn')) element.classList.add('wrong');
    }

    updateScores();
    checkBothAnswered();
}

function handleCategorizationAnswer(choices) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    const question = state.currentQuestions[state.currentQuestionIndex];
    let correctCount = 0;
    question.items.forEach(item => {
        if (choices[item.id] === item.answer) correctCount++;
    });

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

function calculatePoints() {
    return Math.round(1000 + (state.timeLeft / 108) * 500);
}

function checkBothAnswered() {
    if (state.isAnswered && state.buddy.status === 'Answered!') {
        nextQuestion();
    }
}

function nextQuestion() {
    if (state.timer) clearInterval(state.timer);
    stopBotSimulation();
    
    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < state.currentQuestions.length) {
            renderQuestion();
        } else {
            finishQuiz();
        }
    }, 2000);
}

// --- Leaderboard & Buddy ---
function renderBuddy() {
    const list = document.getElementById('competitors-list');
    list.innerHTML = '';

    const players = [
        { ...state.user, isUser: true },
        { ...state.buddy, isUser: false }
    ].sort((a, b) => b.score - a.score);

    players.forEach(player => {
        const item = document.createElement('div');
        item.className = `competitor-item ${player.isUser ? 'user' : ''}`;
        
        let statusClass = '';
        if (player.status === 'Thinking...') statusClass = 'thinking';
        if (player.lastAnswerStatus === 'correct') statusClass = 'correct';
        if (player.lastAnswerStatus === 'wrong') statusClass = 'wrong';
        
        item.innerHTML = `
            <div class="comp-avatar-wrapper">
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

    // Broadcast our score if real buddy
    if (state.buddy.isReal && lobbyChannel) {
        lobbyChannel.send({
            type: 'broadcast',
            event: 'score-update',
            payload: {
                sessionId: sessionId,
                score: state.user.score,
                status: state.isAnswered ? 'Answered!' : 'Thinking...',
                lastAnswerStatus: state.user.lastAnswerStatus
            }
        });
    }
}

function simulateBuddy() {
    if (state.buddy.isReal) return; // Don't simulate for real people
    
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

function stopBotSimulation() {
    state.botActions.forEach(timeout => clearTimeout(timeout));
    state.botActions = [];
}

// --- Timer ---
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
    showView('results');
    const finalLeaderboard = document.getElementById('final-leaderboard');
    finalLeaderboard.innerHTML = '';

    const sorted = [
        { ...state.user, isUser: true },
        { ...state.buddy, isUser: false }
    ].sort((a, b) => b.score - a.score);

    sorted.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = `rank-item ${index === 0 ? 'winner' : ''}`;
        item.innerHTML = `
            <div class="hero-info">
                <span class="rank">#${index + 1}</span>
                <span class="hero-name">${player.name || 'You'}</span>
            </div>
            <span class="hero-score">${player.score}</span>
        `;
        finalLeaderboard.appendChild(item);
    });

    // Save final score to Supabase
    if (state.user.supabaseId) {
        try {
            await supabase
                .from('study_buddy_users')
                .update({ final_score: state.user.score })
                .eq('id', state.user.supabaseId);
        } catch (err) {
            console.error('Error updating final score:', err);
        }
    }
}
