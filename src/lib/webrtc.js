export class VoiceManager {
    constructor(channel, sessionId, callbacks) {
        this.channel = channel;
        this.sessionId = sessionId;
        this.callbacks = callbacks; // { onRemoteStream, onLocalSpeaking, onRemoteSpeaking }
        this.peerConnection = null;
        this.localStream = null;
        this.isMuted = false;
        
        this.config = {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' }
            ]
        };

        this.setupSignaling();
    }

    setupSignaling() {
        this.channel.on('broadcast', { event: 'webrtc-signal' }, payload => {
            if (payload.targetId !== this.sessionId) return;
            this.handleSignal(payload);
        });
    }

    async startLocalStream() {
        try {
            this.localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.setupVolumeDetection(this.localStream, 'local');
            return this.localStream;
        } catch (err) {
            console.error('Error accessing microphone:', err);
            return null;
        }
    }

    setupPeerConnection(targetId, isInitiator) {
        if (this.peerConnection) this.peerConnection.close();
        
        this.peerConnection = new RTCPeerConnection(this.config);

        // Add local tracks
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => {
                this.peerConnection.addTrack(track, this.localStream);
            });
        }

        // Handle remote stream
        this.peerConnection.ontrack = (event) => {
            if (this.callbacks.onRemoteStream) {
                this.callbacks.onRemoteStream(event.streams[0]);
                this.setupVolumeDetection(event.streams[0], 'remote');
            }
        };

        // Handle ICE candidates
        this.peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                this.sendSignal({
                    type: 'candidate',
                    candidate: event.candidate,
                    targetId
                });
            }
        };

        if (isInitiator) {
            this.createOffer(targetId);
        }
    }

    async createOffer(targetId) {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        this.sendSignal({
            type: 'offer',
            offer,
            targetId
        });
    }

    async handleSignal(payload) {
        const { senderId, signal } = payload;

        if (signal.type === 'offer') {
            if (!this.peerConnection) this.setupPeerConnection(senderId, false);
            await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal.offer));
            const answer = await this.peerConnection.createAnswer();
            await this.peerConnection.setLocalDescription(answer);
            this.sendSignal({
                type: 'answer',
                answer,
                targetId: senderId
            });
        } else if (signal.type === 'answer') {
            await this.peerConnection.setRemoteDescription(new RTCSessionDescription(signal.answer));
        } else if (signal.type === 'candidate') {
            if (this.peerConnection) {
                await this.peerConnection.addIceCandidate(new RTCIceCandidate(signal.candidate));
            }
        }
    }

    sendSignal(signal) {
        this.channel.send({
            type: 'broadcast',
            event: 'webrtc-signal',
            payload: {
                senderId: this.sessionId,
                targetId: signal.targetId,
                signal
            }
        });
    }

    setupVolumeDetection(stream, type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            source.connect(analyser);

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            const checkVolume = () => {
                if (!this.peerConnection && type === 'remote') return;
                analyser.getByteFrequencyData(dataArray);
                let sum = 0;
                for (let i = 0; i < bufferLength; i++) {
                    sum += dataArray[i];
                }
                const average = sum / bufferLength;
                const isSpeaking = average > 10; // Threshold

                if (type === 'local' && this.callbacks.onLocalSpeaking) {
                    this.callbacks.onLocalSpeaking(this.isMuted ? false : isSpeaking);
                } else if (type === 'remote' && this.callbacks.onRemoteSpeaking) {
                    this.callbacks.onRemoteSpeaking(isSpeaking);
                }
                requestAnimationFrame(checkVolume);
            };
            checkVolume();
        } catch (e) {
            console.warn('AudioContext volume detection failed:', e);
        }
    }

    toggleMute() {
        if (this.localStream) {
            this.isMuted = !this.isMuted;
            this.localStream.getAudioTracks().forEach(track => {
                track.enabled = !this.isMuted;
            });
            return this.isMuted;
        }
        return false;
    }

    stop() {
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => track.stop());
        }
        if (this.peerConnection) {
            this.peerConnection.close();
            this.peerConnection = null;
        }
    }
}
