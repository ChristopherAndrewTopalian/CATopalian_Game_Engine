// getPos.js

function getPos(theId)
{
    theId = ge(theId);

    let theRect = theId.getBoundingClientRect();

    let theRectY = theId.getBoundingClientRect().top + window.scrollY;

    let posXY =
    {
        x: parseInt(theRect.x) + parseInt(theRect.width) / 2 + window.scrollX,
        y: parseInt(theRectY) + parseInt(theRect.height) / 2
    };

    return posXY;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

