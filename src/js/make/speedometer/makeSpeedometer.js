// makeSpeedometer.js

function makeSpeedometer()
{
    let speedometerDiv = ce('div');
    speedometerDiv.id = 'speedometerDiv';
    speedometerDiv.textContent = 'Speed';
    speedometerDiv.className = 'textStyle001';
    speedometerDiv.title = 'makeSpeedometer()';
    //speedometerDiv.style.position = 'fixed';
    //speedometerDiv.style.right = '0px';
    //speedometerDiv.style.bottom = '150px';
    //speedometerDiv.style.zIndex = 1000;
    speedometerDiv.style.textAlign = 'right';
    speedometerDiv.style.textShadow = '1px 1px #000000';
    ge('rightPanel').append(speedometerDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

