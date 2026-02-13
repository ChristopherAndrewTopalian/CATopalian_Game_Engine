// collision.js

let collidedElementId;

let isColliding = false;

let collidedAny;
let collidedLeft;
let collidedRight;
let collidedTop;
let collidedBottom;

function collision(obj1, obj2)
{
    // if both objects exist
    if (ge(obj1) && ge(obj2))
    {
        // get collision box of obj1
        let theRect1 = ge(obj1).getBoundingClientRect();

        // get collision box of obj2
        let theRect2 = ge(obj2).getBoundingClientRect();

        collidedAny = (
            theRect1.right >= theRect2.left &&
            theRect1.left <= theRect2.right &&
            theRect1.bottom >= theRect2.top &&
            theRect1.top <= theRect2.bottom
        );

        // collided left side
        collidedLeft = theRect1.left > theRect2.left || theRect1.right > theRect2.right;

        // collided right side
        collidedRight = theRect1.left < theRect2.left || theRect1.right < theRect2.right;

        // collided top side
        collidedTop = theRect1.top > theRect2.top || theRect1.bottom > theRect2.bottom;

        // collided bottom side
        collidedBottom = theRect1.top < theRect2.top || theRect1.bottom < theRect2.bottom;

        if (collidedAny)
        {
            isColliding = true;
            
            collidedElementId = obj2;

            return true;
        }
        else
        {
            return false;
        }
    }
}

function pushPlayerFromCollision()
{
    audioPlay('sfx_blip_001', 1.0);
    
    if (collidedAny)
    {
        if (collidedLeft)
        {
            movePlayer(1,0);
        }
        if (collidedRight)
        {
            movePlayer(-1,0);
        }
        if (collidedTop)
        {
            movePlayer(0,1);
        }
        if (collidedBottom)
        {
            movePlayer(0,-1);
        }
        return true;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

