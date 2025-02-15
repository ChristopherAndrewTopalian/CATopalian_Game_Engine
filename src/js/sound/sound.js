// sound.js

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency, duration, waveType, volume, detune, attackTime, releaseTime, panValue)
{
    let oscillator = audioCtx.createOscillator();
    // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx.currentTime);

    let gainNode = audioCtx.createGain();
    let pannerNode = audioCtx.createStereoPanner();
    
    oscillator.connect(gainNode);
    gainNode.connect(pannerNode);
    pannerNode.connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    // attack
    gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attackTime);
    gainNode.gain.linearRampToValueAtTime(0, 

    // release
    audioCtx.currentTime + duration / 1000 - releaseTime);

    pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
}

// 'sine', 'square', 'sawtooth', 'triangle'

function hoverSound()
{
    playTone(
        300,     // frequency
        500,     // duration
        'sine',  // waveType
        0.2,      // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function clickSound()
{
    playTone(
        400,     // frequency
        500,     // duration
        'sine',  // waveType
        0.2,      // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function clickSound2()
{
    playTone(
        245,     // frequency
        500,     // duration
        'square',  // waveType
        0.01,      // volume
        0,       // detune
        0.1,      // attackTime
        0.2,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function slideSound()
{
    playTone(
        300,     // frequency
        500,     // duration
        'triangle',  // waveType
        0.2,      // volume
        500,       // detune
        0.2,      // attackTime
        0.3,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function slideSound2()
{
    playTone(
        400,     // frequency
        500,     // duration
        'triangle',  // waveType
        0.2,      // volume
        500,       // detune
        0.2,      // attackTime
        0.3,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function collisionSound1()
{
    playTone(
        600,     // frequency
        300,     // duration
        'sine',  // waveType
        0.2,      // volume
        0,       // detune
        0.1,      // attackTime
        0.3,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function healingSound1()
{
    playTone(
        800,     // frequency
        100,     // duration
        'sine',  // waveType
        0.03,      // volume
        0,       // detune
        0.1,      // attackTime
        0.1,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

