document.addEventListener('DOMContentLoaded', () => {
    // Show audio instructions to users on mobile devices
    const audioPermissionMessage = document.getElementById('audio-permission');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    if (isIOS || isAndroid) {
        audioPermissionMessage.style.display = 'block';
        
        // Handle the dismiss button
        document.getElementById('dismiss-audio-warning').addEventListener('click', () => {
            audioPermissionMessage.style.display = 'none';
        });
        
        // Handle the enable audio button specifically for iOS
        document.getElementById('enable-audio').addEventListener('click', () => {
            initializeAudio();
            
            // Show feedback to the user
            const enableButton = document.getElementById('enable-audio');
            enableButton.textContent = "Audio Enabled!";
            enableButton.style.backgroundColor = "#888888";
            
            // Play a silent audio to unlock audio playback on iOS
            const silentAudio = new Audio("data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAA=");
            silentAudio.play().catch(e => console.log("Silent audio catch:", e));
            
            // Also try to play all activity sounds to unlock them
            for (const audioId in activitySounds) {
                activitySounds[audioId].load();
                setTimeout(() => {
                    activitySounds[audioId].play()
                        .then(() => activitySounds[audioId].pause())
                        .catch(e => console.log(`Failed to unlock audio ${audioId}:`, e));
                }, 100);
            }
        });
    }
    
    // Function to initialize audio context and speech synthesis
    function initializeAudio() {
        // Create a short silent sound and play it to initialize audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            const audioContext = new AudioContext();
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 0; // Silent
            gainNode.connect(audioContext.destination);
            
            // Create and play a short sound
            const oscillator = audioContext.createOscillator();
            oscillator.connect(gainNode);
            oscillator.start();
            oscillator.stop(0.001);
        }
        
        // Try to initialize speech synthesis
        if ('speechSynthesis' in window) {
            // Create a short utterance and speak it silently
            const speech = new SpeechSynthesisUtterance('');
            speech.volume = 0;
            window.speechSynthesis.speak(speech);
        }
        
        // Attempt to unlock audio playback on iOS
        for (const sound in sounds) {
            sounds[sound].load();
            sounds[sound].play().then(() => {
                sounds[sound].pause();
                sounds[sound].currentTime = 0;
            }).catch(e => console.log(`Failed to unlock ${sound}:`, e));
        }
    }
    
    // Initialize audio on first user interaction
    document.body.addEventListener('click', initializeAudio, { once: true });
    
    // Configuration
    const segments = [
        { color: '#FF5252', activity: 'Jump up and down 5 times!', audioId: 'jump' },
        { color: '#FFEB3B', activity: 'Turn around 3 times!', audioId: 'turn' },
        { color: '#2196F3', activity: null, audioId: 'safe' }, // Safe segment
        { color: '#4CAF50', activity: 'Do your best dinosaur impression!', audioId: 'dinosaur' },
        { color: '#9E9E9E', activity: 'Hop on one foot for 10 seconds!', audioId: 'hop' }, // Gray (was purple)
        { color: '#FFEB3B', activity: null, audioId: 'safe2' }, // Yellow (was orange)
        { color: '#E91E63', activity: 'Make a silly face!', audioId: 'face' },
        { color: '#03A9F4', activity: 'Do 3 jumping jacks!', audioId: 'jumping' }
    ];

    // Check if speech synthesis is supported
    const speechSynthesisSupported = 'speechSynthesis' in window;
    
    // Initialize speech synthesis voices
    let femaleVoices = [];
    let voicesInitialized = false;
    
    if (speechSynthesisSupported) {
        function loadVoices() {
            // Get available voices
            const voices = window.speechSynthesis.getVoices();
            
            if (voices.length > 0) {
                voicesInitialized = true;
                femaleVoices = voices.filter(voice => 
                    voice.name.includes('female') || 
                    voice.name.includes('woman') ||
                    voice.name.includes('girl') ||
                    voice.name.includes('Samantha') ||
                    voice.name.includes('Victoria') ||
                    voice.name.includes('Karen') ||
                    voice.name.includes('Tessa') ||
                    voice.name.includes('Moira') ||
                    voice.name.includes('Veena') ||
                    // Filter for female voice by checking for higher pitch characteristic
                    (voice.name.includes('Google') && !voice.name.includes('Male'))
                );
                
                console.log('Available female voices:', femaleVoices.map(v => v.name));
                
                // If no female voices found, use any available voice
                if (femaleVoices.length === 0) {
                    console.log('No female voices found, using any available voice');
                    femaleVoices = voices;
                }
            } else {
                console.warn('No voices available yet, will retry');
                // Retry after a short delay if no voices are available
                setTimeout(loadVoices, 100);
            }
        }
        
        // Try to initialize voices
        loadVoices();
        
        // Voices may load asynchronously, so we need this event
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    } else {
        console.warn('Speech synthesis not supported in this browser');
    }

    // Sound effects
    const sounds = {
        spinStart: new Audio('sounds/spin-start.mp3'),
        spinEnd: new Audio('sounds/spin-end.mp3'),
        spinning: new Audio('https://assets.mixkit.co/active_storage/sfx/2646/2646-preview.mp3'),
        voiceIntro: new Audio('https://assets.mixkit.co/active_storage/sfx/1627/1627-preview.mp3'),
        // Activity voice clips
        activityJump: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Jump%20up%20and%20down%205%20times!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activityTurn: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Turn%20around%203%20times!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activitySafe: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Whew!%20You%27re%20safe%20this%20time!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activityDinosaur: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Do%20your%20best%20dinosaur%20impression!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activityHop: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Hop%20on%20one%20foot%20for%2010%20seconds!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activityFace: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Make%20a%20silly%20face!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female'),
        activityJumping: new Audio('https://texttospeech.responsivevoice.org/v1/text:synthesize?text=Do%203%20jumping%20jacks!&lang=en-US&engine=g1&rate=0.5&key=vzGmGw8J&gender=female&voice=UK+English+Female')
    };
    
    // Map activity IDs to sound files
    const activitySounds = {
        'jump': sounds.activityJump,
        'turn': sounds.activityTurn,
        'safe': sounds.activitySafe,
        'safe2': sounds.activitySafe,
        'dinosaur': sounds.activityDinosaur,
        'hop': sounds.activityHop,
        'face': sounds.activityFace,
        'jumping': sounds.activityJumping
    };
    
    // Preload all sounds
    for (const sound in sounds) {
        sounds[sound].load();
    }

    // DOM elements
    const wheel = document.querySelector('.wheel');
    const spinButton = document.getElementById('spin-button');
    const result = document.getElementById('result');

    // Create wheel segments
    createWheel();

    // Spin the wheel on button click
    spinButton.addEventListener('click', spinWheel);

    function createWheel() {
        const segmentAngle = 360 / segments.length;
        
        segments.forEach((segment, index) => {
            const segmentElement = document.createElement('div');
            segmentElement.className = 'wheel-segment';
            segmentElement.style.backgroundColor = segment.color;
            
            // Calculate the rotation angle for each segment
            const rotationAngle = segmentAngle * index;
            segmentElement.style.transform = `rotate(${rotationAngle}deg)`;
            
            // Set clip path for the segment (fixed angle)
            segmentElement.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%)`;
            
            wheel.appendChild(segmentElement);
        });
    }

    function spinWheel() {
        // Disable the button during spin
        spinButton.disabled = true;
        
        // Play spin start sound
        sounds.spinStart.play();
        
        // Set up the spinning sound (looping during spin)
        sounds.spinning.loop = true;
        
        // Start the spinning sound with a small delay to not overlap with spin start sound
        setTimeout(() => sounds.spinning.play(), 300);
        
        // Reset the result
        result.textContent = 'Spinning...';
        result.classList.remove('animate-result');
        
        // Remove previous transition and rotation
        wheel.style.transition = 'none';
        wheel.style.transform = 'rotate(0deg)';
        
        // Force reflow
        wheel.offsetHeight;
        
        // Generate a random rotation (between 5 and 10 full rotations)
        const rotations = 5 + Math.random() * 5;
        const degrees = rotations * 360;
        
        // Calculate which segment will be selected
        const segmentAngle = 360 / segments.length;
        
        // Random angle within the total range (small offset to avoid edge cases)
        const randomAngle = Math.floor(Math.random() * 360);
        const totalRotation = degrees + randomAngle;
        
        // Add the transition back
        wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        wheel.style.transform = `rotate(${totalRotation}deg)`;
        
        // Calculate which segment is selected (based on where the wheel stops)
        // The modulo operation ensures we get a value between 0 and 360
        const finalPosition = (totalRotation % 360);
        // We need to normalize this position to map to our segments
        const normalizedPosition = (360 - finalPosition) % 360;
        const selectedIndex = Math.floor(normalizedPosition / segmentAngle);
        const selectedSegment = segments[selectedIndex % segments.length];
        
        // Start speaking while spinning
        setTimeout(() => {
            sounds.voiceIntro.play();
            
            // Set up voice to speak after voice intro finishes
            sounds.voiceIntro.onended = () => {
                speakText();
            };
        }, 1000);
        
        // Function to handle text-to-speech using either speech synthesis or pre-recorded audio
        function speakText() {
            // Check if it's an iOS device
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            
            // Use pre-recorded audio for iOS devices or when speech synthesis isn't supported
            if (isIOS || !speechSynthesisSupported) {
                console.log("Using pre-recorded audio for speech");
                // Get the appropriate audio file based on the segment's audioId
                const audioToPlay = activitySounds[selectedSegment.audioId];
                
                if (audioToPlay) {
                    // Reset audio to start (in case it was played before)
                    audioToPlay.currentTime = 0;
                    
                    // Play the audio file
                    try {
                        const playPromise = audioToPlay.play();
                        
                        // Modern browsers return a promise from play()
                        if (playPromise !== undefined) {
                            playPromise.catch(error => {
                                console.error("Error playing audio:", error);
                                // On iOS, audio can only play after user interaction
                                // Show a message to the user
                                const audioPermissionMessage = document.getElementById('audio-permission');
                                audioPermissionMessage.style.display = 'block';
                            });
                        }
                    } catch (error) {
                        console.error("Error playing activity audio:", error);
                    }
                } else {
                    console.warn("No audio file found for activity:", selectedSegment.audioId);
                }
            } else {
                // Use speech synthesis for non-iOS devices that support it
                // Determine what to say based on the segment
                const textToSpeak = selectedSegment.activity ? 
                    selectedSegment.activity : 
                    "Whew! You're safe this time!";
                
                // Retry function to ensure speech works
                function trySpeak() {
                    // Cancel any previous speech
                    window.speechSynthesis.cancel();
                    
                    // Check if voices are available
                    if (femaleVoices.length === 0) {
                        // Try to load voices again if they're not available
                        const voices = window.speechSynthesis.getVoices();
                        if (voices.length > 0) {
                            femaleVoices = voices;
                        } else {
                            console.warn("No voices available for speech, retrying...");
                            setTimeout(trySpeak, 100);
                            return;
                        }
                    }
                    
                    const speech = new SpeechSynthesisUtterance(textToSpeak);
                    speech.volume = 1;
                    speech.rate = 1;
                    speech.pitch = 1.2; // Slightly higher pitch for female voice
                    
                    // Select a voice
                    if (femaleVoices.length > 0) {
                        // Prioritize certain voices if available
                        const preferredVoices = ['Samantha', 'Victoria', 'Karen', 'Moira', 'Veena'];
                        let selectedVoice = null;
                        
                        // First try to find one of our preferred voices
                        for (const name of preferredVoices) {
                            const voice = femaleVoices.find(v => v.name.includes(name));
                            if (voice) {
                                selectedVoice = voice;
                                break;
                            }
                        }
                        
                        // If no preferred voice found, use the first voice
                        speech.voice = selectedVoice || femaleVoices[0];
                        console.log(`Speaking with voice: ${speech.voice ? speech.voice.name : 'default'}`);
                    }
                    
                    // Add event handlers to manage speech state
                    speech.onend = function() {
                        console.log("Speech finished successfully");
                    };
                    
                    speech.onerror = function(event) {
                        console.error("Speech synthesis error:", event);
                        
                        // Fallback to audio files if speech synthesis fails
                        const audioToPlay = activitySounds[selectedSegment.audioId];
                        if (audioToPlay) {
                            audioToPlay.currentTime = 0;
                            audioToPlay.play().catch(e => console.error("Fallback audio failed:", e));
                        }
                    };
                    
                    // Speak the text
                    window.speechSynthesis.speak(speech);
                    
                    // Chrome/Edge bug workaround: speech can cut off, so we reset it
                    if (window.navigator.userAgent.includes("Chrome") || 
                        window.navigator.userAgent.includes("Edge")) {
                        window.speechSynthesis.pause();
                        window.speechSynthesis.resume();
                    }
                }
                
                // Try to speak
                trySpeak();
            }
        }
        
        // Show the result after the wheel stops spinning
        setTimeout(() => {
            // Stop the spinning sound
            sounds.spinning.pause();
            sounds.spinning.currentTime = 0;
            
            // Play spin end sound
            sounds.spinEnd.play();
            
            let resultText;
            
            if (selectedSegment.activity) {
                resultText = `${selectedSegment.activity} 🔥`;
            } else {
                resultText = 'Whew! You\'re safe this time! 😅';
            }
            
            result.textContent = resultText;
            result.classList.add('animate-result');
            
            // Re-enable the spin button
            spinButton.disabled = false;
        }, 4000); // Same duration as the wheel transition
    }
});