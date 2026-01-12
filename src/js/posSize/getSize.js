// getSize.js

// get Size of the specified element by id
function getSize(theId)
{
    theId = ge(theId);

    let theRect = theId.getBoundingClientRect();

    let sizeXY =
    {
        x: parseInt(theRect.width),
        y: parseInt(theRect.height)
    };

    return sizeXY;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

