# The Floor is Lava!

A fun, interactive web game for kids featuring a colorful spinner wheel that assigns random activities.

## Features

- Colorful spinner wheel with multiple segments
- Animated spinning action with realistic physics
- Random selection of activities or "safe" segments
- Sound effects for spinning and activities
- Kid-friendly design with responsive layout
- Simple, intuitive interface

## How to Play

1. Open `index.html` in a web browser
2. Click the "SPIN!" button to start the wheel
3. Wait for the wheel to stop spinning
4. Follow the activity instruction if you land on an activity segment
5. You're safe if you land on a segment without an activity!

## Customization

To add or modify activities:

1. Open `js/app.js`
2. Modify the `segments` array with your own colors and activities
3. Set `activity: null` for "safe" segments

To replace sound effects:

1. Add your audio files to the `sounds` folder:
   - `spin-start.mp3` - Plays when the wheel starts spinning
   - `spin-end.mp3` - Plays when the wheel stops spinning
   - `activity.mp3` - Plays when an activity is shown

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- JavaScript (ES6+)
- Web Audio API for sound effects
- No external libraries or dependencies

## Browser Support

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge# floorislava
