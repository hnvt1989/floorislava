document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const segments = [
        { color: '#FF5252', activity: 'Jump up and down 5 times!' },
        { color: '#FFEB3B', activity: 'Turn around 3 times!' },
        { color: '#2196F3', activity: null }, // Safe segment
        { color: '#4CAF50', activity: 'Do your best dinosaur impression!' },
        { color: '#9C27B0', activity: 'Hop on one foot for 10 seconds!' },
        { color: '#FF9800', activity: null }, // Safe segment
        { color: '#E91E63', activity: 'Make a silly face!' },
        { color: '#03A9F4', activity: 'Do 3 jumping jacks!' }
    ];

    // Sound effects
    const sounds = {
        spinStart: new Audio('sounds/spin-start.mp3'),
        spinEnd: new Audio('sounds/spin-end.mp3'),
        activity: new Audio('sounds/activity.mp3')
    };

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
            // Play spin end sound
            sounds.spinEnd.play();
            
            let resultText;
            
            if (selectedSegment.activity) {
                resultText = `${selectedSegment.activity} 🔥`;
                // Play activity sound after a small delay to not overlap with spin end sound
                setTimeout(() => sounds.activity.play(), 300);
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