import soundPlay from './sounds.wav';

export default function changeBackground() {
    const colors = [
        'linear-gradient(to right, #ff7e5f, #feb47b)',
        'linear-gradient(to right, #ff5370, #ff416c)',
        'linear-gradient(to right, #ffcc80, #ff9966)',
        'linear-gradient(to right, #ff66cc, #ff33ff)',
        'linear-gradient(to right, #ff99cc, #cc99ff)',
    ];
    
    document.body.style.backgroundColor = colors[Math.floor(Math.random * colors.length)];

    soundPlay();
}

function soundPlay() {
    const sound = new Audio(soundPlay);          
    sound.play(); // play sound
}