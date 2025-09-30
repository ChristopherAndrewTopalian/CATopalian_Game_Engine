// makeIsMovingDiv.js

function makeIsMovingDiv()
{
    let isMovingDiv = ce('div');
    isMovingDiv.id = 'isMovingDiv';
    isMovingDiv.textContent = 'Motion';
    isMovingDiv.className = 'textStyle001';
    isMovingDiv.title = 'makeIsMovingDiv()';
    //isMovingDiv.style.position = 'fixed';
    //isMovingDiv.style.right = '0px';
    //isMovingDiv.style.bottom = '250px';
    //isMovingDiv.style.zIndex = 1000;
    isMovingDiv.style.textShadow = '1px 1px #000000';
    ge('rightPanel').append(isMovingDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

