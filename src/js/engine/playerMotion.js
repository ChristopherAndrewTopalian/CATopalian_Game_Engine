// playerMotion.js

function playerMotion()
{
    // HORIZONTAL MOVEMENT & ANIMATION
    if (keyboard[keyboard.LEFT])
    {
        movePlayer(-1, 0);
        ge(ourPlayer.id).style.transform = 'scaleX(-1)';

        if (!isRunning)
        {
            isRunning = true;
            runAnimationTimer = setInterval(updateSpriteFrame, 100); 
        }
    }
    // Use 'else if' here so the engine doesn't try to move left and right simultaneously
    else if (keyboard[keyboard.RIGHT])
    {
        movePlayer(1, 0);
        ge(ourPlayer.id).style.transform = 'scaleX(1)';

        if (!isRunning)
        {
            isRunning = true;
            runAnimationTimer = setInterval(updateSpriteFrame, 100);
        }
    }

    // VERTICAL MOVEMENT
    if (keyboard[keyboard.UP])
    {
        movePlayer(0, -1);
    }
    if (keyboard[keyboard.DOWN])
    {
        movePlayer(0, 1);
    }

    // BOOST SPEEDS
    if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(-2, 0);
    }
    if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(2, 0);
    }
    if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, -2);
    }
    if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, 2);
    }

    // THE IDLE CHECK
    // we explicitly check if the horizontal keys are released
    if (!keyboard[keyboard.LEFT] && !keyboard[keyboard.RIGHT])
    {
        if (isRunning)
        {
            clearInterval(runAnimationTimer);
            isRunning = false;
            
            currentFrame = 0;
            ge(ourPlayer.id).style.backgroundPosition = "0px 0px";
        }
    }
}

/*
// player Movement Controls
function playerMotion()
{
    if (keyboard[keyboard.LEFT])
    {
        movePlayer(-1, 0);

        ge(ourPlayer.id).style.transform = 'scaleX(-1)';

        // Start the timer ONLY if it isn't already running
        if (!isRunning) {
            isRunning = true;
            // The browser will now call updateSpriteFrame() every 100ms
            runAnimationTimer = setInterval(updateSpriteFrame, 100); 
        }
    }
    
    if (keyboard[keyboard.RIGHT])
    {
        movePlayer(1, 0);

        ge(ourPlayer.id).style.transform = 'scaleX(1)';

        // Start the timer ONLY if it isn't already running
        if (!isRunning) {
            isRunning = true;
            runAnimationTimer = setInterval(updateSpriteFrame, 100);
        }
    }
    
    if (keyboard[keyboard.UP])
    {
        movePlayer(0, -1);
    }
    
    if (keyboard[keyboard.DOWN])
    {
        movePlayer(0, 1);
    }

    // boost speed
    if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(-2, 0);
    }

    if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(2, 0);
    }

    if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, -2);
    }

    if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, 2);
    }

    else
    {
        // If the keys are released, stop the timer
        if (isRunning)
        {
            clearInterval(runAnimationTimer); // Kills the loop
            isRunning = false;
            
            // Snap the character back to the first frame (standing still)
            currentFrame = 0;
            ge(ourPlayer.id).style.backgroundPosition = "0px 0px";
        }
    }
}
    */

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

