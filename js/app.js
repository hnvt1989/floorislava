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
    
    // Define all 40 fun activities for kids 6-8
    const allActivities = [
        // Original 20 activities
        { activity: 'Jump up and down 5 times!', audioId: 'jump' },
        { activity: 'Make a silly face!', audioId: 'face' },
        { activity: 'Pretend you\'re a superhero flying!', audioId: 'superhero' },
        { activity: 'Dance like nobody\'s watching!', audioId: 'dance' },
        { activity: 'Make your silliest noise!', audioId: 'noise' },
        { activity: 'Turn around 3 times!', audioId: 'turn' },
        { activity: 'Do 3 jumping jacks!', audioId: 'jumping' },
        { activity: 'Sing your favorite song for 10 seconds!', audioId: 'sing' },
        { activity: 'Blow a giant imaginary bubble!', audioId: 'bubble' },
        { activity: 'Do your best dinosaur impression!', audioId: 'dinosaur' },
        { activity: 'Do a funny animal walk!', audioId: 'animal' },
        { activity: 'Freeze like a statue for 10 seconds!', audioId: 'freeze' },
        { activity: 'Touch your toes 5 times!', audioId: 'toes' },
        { activity: 'Hop on one foot for 10 seconds!', audioId: 'hop' },
        { activity: 'Count backwards from 10 to 1!', audioId: 'count' },
        { activity: 'Clap your hands 10 times!', audioId: 'jump' },
        { activity: 'Wiggle like a jellyfish!', audioId: 'face' },
        { activity: 'March in place for 10 seconds!', audioId: 'superhero' },
        { activity: 'Spin in a circle!', audioId: 'turn' },
        { activity: 'Roar like a lion!', audioId: 'noise' },
        
        // 20 new activities for kids 6-8
        { activity: 'Pretend to be a robot for 10 seconds!', audioId: 'robot' },
        { activity: 'Make a funny face in slow motion!', audioId: 'face' },
        { activity: 'Hop like a bunny 5 times!', audioId: 'hop' },
        { activity: 'Pretend to swim like a fish!', audioId: 'animal' },
        { activity: 'Balance on one foot for 5 seconds!', audioId: 'balance' },
        { activity: 'Pretend you\'re a frog and jump 3 times!', audioId: 'jump' },
        { activity: 'Flap your arms like a bird!', audioId: 'bird' },
        { activity: 'Pretend to be a monkey!', audioId: 'animal' },
        { activity: 'Move like you\'re walking on the moon!', audioId: 'moon' },
        { activity: 'Pretend to be a growing flower!', audioId: 'grow' },
        { activity: 'Act like you\'re a sleepy bear!', audioId: 'animal' },
        { activity: 'Stomp like an elephant!', audioId: 'stomp' },
        { activity: 'Crawl like a sneaky spy!', audioId: 'spy' },
        { activity: 'Make circles with your arms!', audioId: 'circle' },
        { activity: 'Pretend to be a snake slithering!', audioId: 'animal' },
        { activity: 'Give yourself a high five!', audioId: 'clap' },
        { activity: 'Pretend to ride a horse!', audioId: 'horse' },
        { activity: 'Wave your arms like noodles!', audioId: 'noodle' },
        { activity: 'Pretend to be a race car!', audioId: 'car' },
        { activity: 'Do your silliest dance move!', audioId: 'dance' }
    ];
    
    // Color definitions
    const colorConfig = [
        { color: '#FF0000', name: 'red' },    // Red
        { color: '#FFEB3B', name: 'yellow' }, // Yellow
        { color: '#4CAF50', name: 'green' },  // Green
        { color: '#9E9E9E', name: 'gray' }    // Gray
    ];
    
    // Create segments with proper alternating patterns to avoid adjacent same colors
    function createBalancedSegments() {
        // Define the segment structure to have 2 of each color
        let colorSequence = [];
        
        // Create a valid pattern with no adjacent same colors
        // We'll use a predefined valid pattern: red, yellow, green, gray, red, yellow, green, gray
        // This guarantees no adjacent same colors in a wheel
        colorSequence = [
            colorConfig[0], // red
            colorConfig[1], // yellow  
            colorConfig[2], // green
            colorConfig[3], // gray
            colorConfig[0], // red
            colorConfig[1], // yellow
            colorConfig[2], // green
            colorConfig[3]  // gray
        ];
        
        // Shuffle while preserving the property of no adjacent same colors
        for (let i = 0; i < 10; i++) {  // Do several shuffle passes
            const indices = [0, 1, 2, 3, 4, 5, 6, 7];
            const shuffled = [];
            
            // Pick random pairs and swap them to maintain no-adjacent-same-color property
            while (indices.length > 0) {
                const idx = Math.floor(Math.random() * indices.length);
                const val = indices.splice(idx, 1)[0];
                shuffled.push(val);
            }
            
            // Check if the shuffle maintains our property (no adjacent same colors)
            let valid = true;
            for (let j = 0; j < 8; j++) {
                // Check if adjacent colors are the same (including wrapping around)
                if (colorSequence[shuffled[j]].name === colorSequence[shuffled[(j+1)%8]].name) {
                    valid = false;
                    break;
                }
            }
            
            // If valid, apply shuffle
            if (valid) {
                const newSequence = shuffled.map(idx => colorSequence[idx]);
                colorSequence = newSequence;
                break;
            }
        }
        
        // Now assign activities to the segments
        // We need exactly 8 segments: 6 with activities and 2 safe spaces
        const randomActivities = getRandomActivities(6);  // Get 6 random activities
        
        // Create a mask for which segments should be safe spaces
        // Pick 2 random positions for safe spaces, ensure they're different colors
        let safePositions = [];
        
        // Ensure the safe spaces are on different colors
        const colorPositions = {};
        colorSequence.forEach((color, idx) => {
            if (!colorPositions[color.name]) {
                colorPositions[color.name] = [];
            }
            colorPositions[color.name].push(idx);
        });
        
        // Pick one position from each of two different colors
        const colorNames = Object.keys(colorPositions);
        const selectedColors = [];
        
        // Randomly select two different colors for safe spaces
        while (selectedColors.length < 2) {
            const randomColorIdx = Math.floor(Math.random() * colorNames.length);
            const colorName = colorNames[randomColorIdx];
            
            if (!selectedColors.includes(colorName)) {
                selectedColors.push(colorName);
            }
        }
        
        // For each selected color, choose one of its positions
        selectedColors.forEach(colorName => {
            const positions = colorPositions[colorName];
            const randomPosIdx = Math.floor(Math.random() * positions.length);
            safePositions.push(positions[randomPosIdx]);
        });
        
        console.log("Safe positions:", safePositions);
        
        // Now create the segments
        return colorSequence.map((colorInfo, index) => {
            // Check if this position should be a safe space
            if (safePositions.includes(index)) {
                return {
                    color: colorInfo.color,
                    activity: null, 
                    audioId: 'safe'
                };
            } else {
                // Calculate which activity to use
                // We need to map 6 activities across the 6 non-safe positions
                // First, get position in the non-safe list
                const nonSafePosition = index - safePositions.filter(pos => pos < index).length;
                const activity = randomActivities[nonSafePosition];
                
                return {
                    color: colorInfo.color,
                    activity: activity.activity,
                    audioId: activity.audioId
                };
            }
        });
    }
    
    // Create the properly distributed segments
    const segments = createBalancedSegments();
    
    // Improved function to select random activities without duplicates
    // Uses the Fisher-Yates (Knuth) shuffle algorithm for better randomization
    function getRandomActivities(count) {
        // Create a copy of the activities array to avoid modifying the original
        const activities = [...allActivities];
        let currentIndex = activities.length;
        let randomIndex;
        
        // Fisher-Yates shuffle algorithm
        while (currentIndex !== 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            
            // Swap it with the current element
            [activities[currentIndex], activities[randomIndex]] = 
            [activities[randomIndex], activities[currentIndex]];
        }
        
        // Get activities to use for this session
        // Add some session tracking to avoid repeating activities too soon
        const sessionKey = 'lastUsedActivities';
        let lastUsedActivities = [];
        
        try {
            // Try to get previously used activities from session storage
            const stored = sessionStorage.getItem(sessionKey);
            if (stored) {
                lastUsedActivities = JSON.parse(stored).map(a => a.activity);
            }
        } catch (e) {
            console.log("Session storage not available:", e);
        }
        
        // Filter out recently used activities where possible
        let filteredActivities = activities;
        if (lastUsedActivities.length > 0 && activities.length > count * 2) {
            filteredActivities = activities.filter(a => !lastUsedActivities.includes(a.activity));
            
            // If we filtered too many, just use the shuffled list
            if (filteredActivities.length < count) {
                filteredActivities = activities;
            }
        }
        
        // Get the activities for this round
        const selectedActivities = filteredActivities.slice(0, count);
        
        // Store these activities for next time
        try {
            sessionStorage.setItem(sessionKey, JSON.stringify(selectedActivities));
        } catch (e) {
            console.log("Unable to store in session storage:", e);
        }
        
        console.log("Selected activities for this round:", selectedActivities.map(a => a.activity));
        
        return selectedActivities;
    }
    
    // Assign random activities to non-safe segments (6 segments need activities)
    const randomActivities = getRandomActivities(6);
    let activityIndex = 0;
    
    for (let i = 0; i < segments.length; i++) {
        if (segments[i].activity !== null) {
            segments[i].activity = randomActivities[activityIndex].activity;
            segments[i].audioId = randomActivities[activityIndex].audioId;
            activityIndex++;
        }
    }
    
    // Log the final segments
    console.log("Total segments:", segments.length);
    
    // Count segments of each color
    const colorCounts = {};
    segments.forEach(segment => {
        if (!colorCounts[segment.color]) {
            colorCounts[segment.color] = 0;
        }
        colorCounts[segment.color]++;
    });
    
    // Log color counts
    console.log("Color distribution:");
    Object.keys(colorCounts).forEach(color => {
        console.log(`${color}: ${colorCounts[color]} segments`);
    });
    
    // Check for adjacent same colors
    let hasAdjacentSameColors = false;
    for (let i = 0; i < segments.length; i++) {
        const currColor = segments[i].color;
        const nextColor = segments[(i + 1) % segments.length].color;
        if (currColor === nextColor) {
            console.log(`Warning: Same color (${currColor}) at positions ${i+1} and ${(i+1) % segments.length + 1}`);
            hasAdjacentSameColors = true;
        }
    }
    
    if (!hasAdjacentSameColors) {
        console.log("Perfect: No adjacent same colors found!");
    }
    
    // Log all activities that will show up on this spin
    console.log("Activities in this wheel:");
    segments.forEach((segment, index) => {
        console.log(`Segment ${index+1}: ${segment.activity || 'SAFE SPACE'} (${segment.color})`);
    });

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
            
            // Add both the general class and a color-specific class
            // Remove the # and convert to lowercase for the CSS class
            const colorClass = 'color-' + segment.color.substring(1).toLowerCase();
            segmentElement.className = `wheel-segment ${colorClass}`;
            segmentElement.style.backgroundColor = segment.color;
            
            // Add a debug text to verify the segment color (temporary)
            console.log(`Creating segment with color: ${segment.color}, class: ${colorClass}`);
            
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
        
        // We'll start speaking after the spin stops and a 2-second pause
        let voiceTimer = null;
        
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
            
            // Clear previous animation classes
            result.classList.remove('animate-result', 'safe-result', 'activity-result');
            
            // Force browser to recalculate styles for animation to trigger again
            void result.offsetWidth;
            
            if (selectedSegment.activity) {
                // Activity animation
                result.classList.add('animate-result', 'activity-result');
            } else {
                // Safe space animation
                result.classList.add('safe-result');
            }
            
            // Start the voice after a 2-second pause
            // Clear any previous voice timer
            if (voiceTimer) {
                clearTimeout(voiceTimer);
            }
            
            // Set a timer to start the voice after 2 seconds
            voiceTimer = setTimeout(() => {
                console.log("Starting voice after 2-second pause");
                speakText();
            }, 2000);
            
            // Re-enable the spin button
            spinButton.disabled = false;
        }, 4000); // Same duration as the wheel transition
    }
});