document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const segments = [
        { color: '#FF5252', activity: 'Jump up and down 5 times!' },
        { color: '#FFEB3B', activity: 'Turn around 3 times!' },
        { color: '#2196F3', activity: null }, // Safe segment
        { color: '#4CAF50', activity: 'Do your best dinosaur impression!' },
        { color: '#9E9E9E', activity: 'Hop on one foot for 10 seconds!' }, // Gray (was purple)
        { color: '#FFEB3B', activity: null }, // Yellow (was orange)
        { color: '#E91E63', activity: 'Make a silly face!' },
        { color: '#03A9F4', activity: 'Do 3 jumping jacks!' }
    ];

    // Check if speech synthesis is supported
    const speechSynthesisSupported = 'speechSynthesis' in window;
    
    // Initialize speech synthesis voices
    let femaleVoices = [];
    
    if (speechSynthesisSupported) {
        function loadVoices() {
            const voices = window.speechSynthesis.getVoices();
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
        }
        
        // Initialize voices
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
        activity: new Audio('sounds/activity.mp3'),
        spinning: new Audio('https://assets.mixkit.co/active_storage/sfx/2646/2646-preview.mp3'),
        voiceIntro: new Audio('https://assets.mixkit.co/active_storage/sfx/1627/1627-preview.mp3')
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
                
                // Play activity sound after a small delay to not overlap with spin end sound
                setTimeout(() => {
                    sounds.activity.play();
                    
                    // Play voice intro sound and then speak the activity
                    setTimeout(() => {
                        // Play the voice intro sound
                        sounds.voiceIntro.play();
                        
                        // Set up voice to speak after voice intro finishes
                        sounds.voiceIntro.onended = () => {
                            // Add speech synthesis with woman's voice if supported
                            if (speechSynthesisSupported) {
                                const speech = new SpeechSynthesisUtterance(selectedSegment.activity);
                                speech.volume = 1;
                                speech.rate = 1;
                                speech.pitch = 1.2; // Slightly higher pitch for female voice
                                
                                // Select a female voice
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
                                    
                                    // If no preferred voice found, use the first female voice
                                    speech.voice = selectedVoice || femaleVoices[0];
                                    
                                    console.log(`Speaking with voice: ${speech.voice.name}`);
                                }
                                
                                // Cancel any ongoing speech
                                window.speechSynthesis.cancel();
                                
                                // Speak the activity
                                window.speechSynthesis.speak(speech);
                            }
                        };
                    }, 300);
                }, 300);
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