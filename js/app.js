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
    
    // Handle the test audio button
    document.getElementById('test-audio').addEventListener('click', () => {
        try {
            // Play a test sound to confirm audio is working
            const testAudio = new Audio("https://cdn.freesound.org/previews/242/242758_4484625-lq.mp3");
            testAudio.volume = 1.0;
            
            const testButton = document.getElementById('test-audio');
            testButton.textContent = "Playing test...";
            
            testAudio.play().then(() => {
                testButton.textContent = "Audio Works! ✓";
                testButton.style.backgroundColor = "#4CAF50";
            }).catch(error => {
                console.error("Test audio error:", error);
                testButton.textContent = "Audio Failed! Try again";
                testButton.style.backgroundColor = "#F44336";
            });
        } catch (error) {
            console.error("Error setting up test audio:", error);
        }
    });
    
    // Configuration with simplified colors (red, yellow, green, gray)
    const segments = [
        // Red segments
        { color: '#FF0000', activity: 'Jump up and down 5 times!', audioId: 'jump' },
        { color: '#FF0000', activity: 'Make a silly face!', audioId: 'face' },
        { color: '#FF0000', activity: 'Pretend you\'re a superhero flying!', audioId: 'superhero' },
        { color: '#FF0000', activity: 'Dance like nobody\'s watching!', audioId: 'dance' },
        { color: '#FF0000', activity: 'Make your silliest noise!', audioId: 'noise' },
        
        // Yellow segments
        { color: '#FFEB3B', activity: 'Turn around 3 times!', audioId: 'turn' },
        { color: '#FFEB3B', activity: null, audioId: 'safe' }, // Safe segment
        { color: '#FFEB3B', activity: 'Do 3 jumping jacks!', audioId: 'jumping' },
        { color: '#FFEB3B', activity: 'Sing your favorite song for 10 seconds!', audioId: 'sing' },
        { color: '#FFEB3B', activity: 'Blow a giant imaginary bubble!', audioId: 'bubble' },
        
        // Green segments
        { color: '#4CAF50', activity: 'Do your best dinosaur impression!', audioId: 'dinosaur' },
        { color: '#4CAF50', activity: null, audioId: 'safe2' }, // Safe segment
        { color: '#4CAF50', activity: 'Do a funny animal walk!', audioId: 'animal' },
        { color: '#4CAF50', activity: 'Freeze like a statue for 10 seconds!', audioId: 'freeze' },
        { color: '#4CAF50', activity: 'Touch your toes 5 times!', audioId: 'toes' },
        
        // Gray segments
        { color: '#9E9E9E', activity: 'Hop on one foot for 10 seconds!', audioId: 'hop' },
        { color: '#9E9E9E', activity: null, audioId: 'safe3' }, // Safe segment
        { color: '#9E9E9E', activity: 'Count backwards from 10 to 1!', audioId: 'count' }
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
        spinning: new Audio('https://assets.mixkit.co/active_storage/sfx/2646/2646-preview.mp3')
    };
    
    // Activity voice clips using direct CDN URLs that work on iOS
    const activityAudios = {
        // Original activities
        jump: 'https://cdn.freesound.org/previews/473/473369_3288231-lq.mp3',
        turn: 'https://cdn.freesound.org/previews/399/399934_7666412-lq.mp3',
        safe: 'https://cdn.freesound.org/previews/339/339832_5121236-lq.mp3',
        safe2: 'https://cdn.freesound.org/previews/339/339832_5121236-lq.mp3',
        safe3: 'https://cdn.freesound.org/previews/339/339832_5121236-lq.mp3',
        dinosaur: 'https://cdn.freesound.org/previews/242/242764_4484625-lq.mp3',
        hop: 'https://cdn.freesound.org/previews/242/242756_4484625-lq.mp3',
        face: 'https://cdn.freesound.org/previews/242/242757_4484625-lq.mp3',
        jumping: 'https://cdn.freesound.org/previews/242/242760_4484625-lq.mp3',
        
        // New activities
        superhero: 'https://cdn.freesound.org/previews/242/242758_4484625-lq.mp3',
        animal: 'https://cdn.freesound.org/previews/242/242762_4484625-lq.mp3',
        sing: 'https://cdn.freesound.org/previews/242/242763_4484625-lq.mp3',
        freeze: 'https://cdn.freesound.org/previews/414/414269_3567181-lq.mp3',
        dance: 'https://cdn.freesound.org/previews/425/425550_6290669-lq.mp3',
        count: 'https://cdn.freesound.org/previews/450/450713_6290669-lq.mp3',
        toes: 'https://cdn.freesound.org/previews/387/387947_7215472-lq.mp3',
        bubble: 'https://cdn.freesound.org/previews/381/381603_7215472-lq.mp3',
        noise: 'https://cdn.freesound.org/previews/349/349818_6290669-lq.mp3'
    };
    
    // Initialize activity sounds objects
    const activitySounds = {};
    
    // We'll create Audio objects on-demand for iOS compatibility
    function getActivityAudio(activityId) {
        // Check if we already have the audio object
        if (!activitySounds[activityId]) {
            // Create audio object on first use
            const audioUrl = activityAudios[activityId] || activityAudios['safe']; // Default to safe if not found
            activitySounds[activityId] = new Audio(audioUrl);
            activitySounds[activityId].load(); // Pre-load
        }
        
        return activitySounds[activityId];
    }
    
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
            // Skip voice intro sound and directly speak text
            speakText();
        }, 1000);
        
        // Function to handle text-to-speech using either speech synthesis or pre-recorded audio
        function speakText() {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            // Always use audio files on iOS or when speech synthesis isn't supported
            if (isIOS || !speechSynthesisSupported) {
                console.log("Using pre-recorded audio for speech");
                playActivitySound();
            } else {
                // Use speech synthesis for non-iOS devices that support it
                speakWithSynthesis();
            }
        }
        
        // Function to play pre-recorded audio files for the activity
        function playActivitySound() {
            try {
                // Create a new audio object every time for iOS
                const audioUrl = activityAudios[selectedSegment.audioId];
                const audio = new Audio(audioUrl);
                
                // Log which audio we're trying to play
                console.log("Playing activity audio:", selectedSegment.audioId, "URL:", audioUrl);
                
                // Set volume and try to play
                audio.volume = 1.0;
                
                // Update the test button to show which activity is playing
                const testButton = document.getElementById('test-audio');
                if (testButton) {
                    testButton.innerText = "Playing: " + selectedSegment.audioId;
                    testButton.style.backgroundColor = "#2196F3";
                }
                
                // Play the audio with error handling
                const playPromise = audio.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log("Audio playing successfully:", selectedSegment.audioId);
                            if (testButton) {
                                testButton.innerText = "Audio playing ✓";
                                testButton.style.backgroundColor = "#4CAF50";
                            }
                        })
                        .catch(error => {
                            console.error("Error playing activity audio:", error);
                            
                            // Show error message on screen for debugging
                            const errorMessage = document.createElement('div');
                            errorMessage.style.color = 'red';
                            errorMessage.style.padding = '10px';
                            errorMessage.innerText = "Audio error: " + error.message;
                            document.body.appendChild(errorMessage);
                            
                            // Show the audio permission message
                            const audioPermissionMessage = document.getElementById('audio-permission');
                            audioPermissionMessage.style.display = 'block';
                            
                            if (testButton) {
                                testButton.innerText = "Audio failed ✗";
                                testButton.style.backgroundColor = "#F44336";
                            }
                        });
                }
            } catch (error) {
                console.error("Error setting up activity audio:", error);
            }
        }
        
        // Function to use speech synthesis API
        function speakWithSynthesis() {
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
                    playActivitySound();
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