// collisionLeftSide.js

// detects collisions from left side only

function collisionLeftSide(obj1, obj2)
{
    if (ge(obj1) && ge(obj2))
    {
        let theRect1 = ge(obj1).getBoundingClientRect();

        let theRect2 = ge(obj2).getBoundingClientRect();

        let collided = !(theRect1.right < theRect2.left ||
        theRect1.left > theRect2.right ||
        theRect1.bottom < theRect2.top ||
        theRect1.top > theRect2.bottom);

        let collidedY1 = theRect1.left > theRect2.left || theRect1.right > theRect2.right;

        if (collided == true && collidedY1 != true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

