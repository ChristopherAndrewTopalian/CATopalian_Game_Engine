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

    // Convert milliseconds to seconds for the audio context
    let durationInSeconds = duration / 1000;

    // THE ENVELOPE (Attack, Sustain, Release)

    // Initialize volume at 0
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    // Attack: Ramp up to the target volume
    gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attackTime);

    // Sustain: Hold the target volume until it is time to release
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime + durationInSeconds - releaseTime);

    // Release: Ramp the volume back down to 0
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + durationInSeconds);

    // Set stereo panning
    pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

    // Start and stop the oscillator
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + durationInSeconds);
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

function hoverSound2()
{
    playTone(
        200,     // frequency
        100,     // duration
        'sine',  // waveType
        0.1,      // volume
        0,       // detune
        0.05,      // attackTime
        0.05,      // releaseTime
        0.0      // panValue -0.5 is left
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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

