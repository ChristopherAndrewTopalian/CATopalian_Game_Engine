// collision.js

let collidedElementId = 'No Collision';

function checkCollision(obj1Id, obj2Id) {
    // Setup the default "No Hit" report
    let report = {
        hit: false,
        side: null, // 'left', 'right', 'top', 'bottom'
        targetId: obj2Id
    };

    let el1 = ge(obj1Id);
    let el2 = ge(obj2Id);

    // Safety check
    if (!el1 || !el2) return report;

    // Get the Rectangles (The Math)
    let r1 = el1.getBoundingClientRect();
    let r2 = el2.getBoundingClientRect();

    // AABB Check: Are they intersecting at all?
    let hit = !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );

    if (hit) {
        report.hit = true;

        // Calculate Centers to determine the "Side"
        let r1CenterX = r1.left + (r1.width / 2);
        let r1CenterY = r1.top + (r1.height / 2);
        let r2CenterX = r2.left + (r2.width / 2);
        let r2CenterY = r2.top + (r2.height / 2);

        // Calculate Overlaps (How deep are we inside?)
        let overlapX = (r1.width + r2.width) / 2 - Math.abs(r1CenterX - r2CenterX);
        let overlapY = (r1.height + r2.height) / 2 - Math.abs(r1CenterY - r2CenterY);

        // Determine Side based on the "Least Overlap" principle.
        // If we overlap less on X, it's a horizontal hit.
        if (overlapX < overlapY) {
            // Did we hit the Left or Right side of the Box?
            if (r1CenterX < r2CenterX) {
                report.side = 'left'; // Player is to the Left of the box
            } else {
                report.side = 'right'; // Player is to the Right of the box
            }
        } else {
            // Did we hit the Top or Bottom of the Box?
            if (r1CenterY < r2CenterY) {
                report.side = 'top'; // Player is Above the box
            } else {
                report.side = 'bottom'; // Player is Below the box
            }
        }
    }

    return report;
}

function handlePhysics(report)
{
    if (!report.hit) return;

    audioPlay('sfx_blip_001', 1.0);

    // Physics Logic: Push the player OUT based on where they are.
    // Note: The movePlayer values might need to be higher depending on your speed.
    switch (report.side)
    {
        case 'left':
            movePlayer(-1, 0); // Player is on Left, Push Left
            break;
        case 'right':
            movePlayer(1, 0);  // Player is on Right, Push Right
            break;
        case 'top':
            movePlayer(0, -1); // Player is on Top, Push Up
            break;
        case 'bottom':
            movePlayer(0, 1);  // Player is on Bottom, Push Down
            break;
    }
}

function collision2(obj1, obj2)
{
    let isColliding = false;

    // if both objects exist
    if (ge(obj1) && ge(obj2))
    {
        // get collision box of obj1
        let theRect1 = ge(obj1).getBoundingClientRect();

        // get collision box of obj2
        let theRect2 = ge(obj2).getBoundingClientRect();

        let collidedAny = (
            theRect1.right >= theRect2.left &&
            theRect1.left <= theRect2.right &&
            theRect1.bottom >= theRect2.top &&
            theRect1.top <= theRect2.bottom
        );

        // collided left side
        let collidedLeft = theRect1.left > theRect2.left || theRect1.right > theRect2.right;

        // collided right side
        let collidedRight = theRect1.left < theRect2.left || theRect1.right < theRect2.right;

        // collided top side
        let collidedTop = theRect1.top > theRect2.top || theRect1.bottom > theRect2.bottom;

        // collided bottom side
        let collidedBottom = theRect1.top < theRect2.top || theRect1.bottom < theRect2.bottom;

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

function pushPlayerFromCollision(obj1, obj2)
{
    audioPlay('sfx_blip_001', 1.0);
    
    if (collision(obj1, obj2))
    {
        if (collisionLeftSide(obj1, obj2))
        {
            movePlayer(1,0);
        }
        if (collisionRightSide(obj1, obj2))
        {
            movePlayer(-1,0);
        }
        if (collisionTopSide(obj1, obj2))
        {
            movePlayer(0,1);
        }
        if (collisionBottomSide(obj1, obj2))
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

