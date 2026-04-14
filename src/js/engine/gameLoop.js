// gameLoop.js

// gameLoop.js

function gameLoop() {
    playerMotion();
    cameraFollowsPlayer();
    // gravity(9.8); // Uncomment when ready

    // 1. UI Updates -------------------------
    if (ge('xPosDiv') && ge('yPosDiv')) {
        ge('xPosDiv').textContent = ourPlayer.x;
        ge('yPosDiv').textContent = ourPlayer.y;
    }

    if (ge('speedometerDiv')) {
        ge('speedometerDiv').innerHTML = 'Speed' + '<br>' + updateSpeedometer().toFixed(3);
    }
    
    // Minimap updates
    if (ge('minimap')) {
        if (ge('minimapPlayer')) updateMinimapPlayer();
        if (ge('treasureCopper')) updateMinimapTreasure('minimapCopperIcon', 'treasureCopper');
        if (ge('treasureSilver')) updateMinimapTreasure('minimapSilverIcon', 'treasureSilver');
    }

    // 2. Collision System -------------------
    
    // Group 1: Standard Obstacles (Floors & Boxes)
    // We can loop through these to save space
    const obstacles = [
        "floor1", "floor2", "floor3",
        "boxIron", "boxCopper", "boxSilver", "boxGold"
    ];

    let currentFrameCollision = null; // Track if we hit anything this frame

    obstacles.forEach(id => {
        // Calculate the math ONCE
        let report = checkCollision(ourPlayer.id, id);
        
        if (report.hit) {
            handlePhysics(report); // Move the player
            currentFrameCollision = id; // Remember what we hit for the UI
        }
    });

    // Group 2: Special "Test" Boxes (Color Changing Logic)
    // We check these individually because they have custom visual effects
    
    // Bottom Test Box
    let bottomReport = checkCollision(ourPlayer.id, "boxCollideBottom");
    if (bottomReport.hit) {
        handlePhysics(bottomReport);
        currentFrameCollision = "boxCollideBottom";
        
        // Custom visual logic from your original code
        if (bottomReport.side === 'bottom') { // Only trigger if we hit the bottom?
            ge('minimap').style.borderColor = collisionColor001;
            ge('boxCollideBottom').style.backgroundColor = collisionColor002;
            setTimeout(() => {
                ge('boxCollideBottom').style.backgroundColor = "rgb(0, 0, 0)";
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);
        }
    }

    // Top Test Box
    let topReport = checkCollision(ourPlayer.id, "boxCollideTop");
    if (topReport.hit) {
        handlePhysics(topReport);
        currentFrameCollision = "boxCollideTop";

        if (topReport.side === 'top') {
            ge('minimap').style.borderColor = collisionColor001;
            ge('boxCollideTop').style.backgroundColor = collisionColor002;
            setTimeout(() => {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
                ge('boxCollideTop').style.backgroundColor = "rgb(0, 0, 0)";
            }, 500);
        }
    }

    // Left Test Box
    let leftReport = checkCollision(ourPlayer.id, "boxCollideLeft");
    if (leftReport.hit) {
        handlePhysics(leftReport);
        currentFrameCollision = "boxCollideLeft";

        if (leftReport.side === 'left') {
            ge('minimap').style.borderColor = collisionColor001;
            ge('boxCollideLeft').style.backgroundColor = collisionColor002;
            setTimeout(() => {
                ge('boxCollideLeft').style.backgroundColor = "rgb(0, 0, 0)";
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);
        }
    }

    // Right Test Box
    let rightReport = checkCollision(ourPlayer.id, "boxCollideRight");
    if (rightReport.hit) {
        handlePhysics(rightReport);
        currentFrameCollision = "boxCollideRight";

        if (rightReport.side === 'right') {
            ge('minimap').style.borderColor = collisionColor001;
            ge('boxCollideRight').style.backgroundColor = collisionColor002;
            setTimeout(() => {
                ge('boxCollideRight').style.backgroundColor = "rgb(0, 0, 0)";
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);
        }
    }

    // 3. Final UI Updates based on collisions
    if (currentFrameCollision) {
        collidedElementId = currentFrameCollision;
    } else {
        collidedElementId = "No Collision";
    }

    if (ge('infoDiv')) ge('infoDiv').innerHTML = collidedElementId;
    if (ge('collisionInfoDiv')) ge('collisionInfoDiv').innerHTML = collidedElementId;

    // 4. Cleanup
    wasObjectLineCrossed(ourPlayer);
    wasLineCrossed();
    keepPlayerInWorld();

    requestAnimationFrame(gameLoop);
}

function gameLoop2()
{
    playerMotion();

    // camera follows thePlayer
    cameraFollowsPlayer();

    // gravity(9.8);

    //-//

    // text update of player position
    if (ge('xPosDiv') && ge('yPosDiv'))
    {
        ge('xPosDiv').textContent = ourPlayer.x;
        ge('yPosDiv').textContent = ourPlayer.y;
    }

    //-//

    if (ge('infoDiv'))
    {
        if (collidedWithClass(ourPlayer.id, 'boxStyle001'))
        {
            ge('infoDiv').innerHTML = collidedElementId;
        }
        else
        {
            ge('infoDiv').innerHTML = 'No Collision';
        }
    }

    //-//

    // minimap player update
    if (ge('minimap') && ge('minimapPlayer'))
    {
        updateMinimapPlayer();
    }

    //-//

    // minimap copper treasure update
    if (ge('minimap') && ge('treasureCopper'))
    {
        // id of icon, id of element we are tracking
        updateMinimapTreasure('minimapCopperIcon', 'treasureCopper');
    }

    //-//

    // minimap silver treasure update
    if (ge('minimap') && ge('treasureSilver'))
    {
        // id of icon, id of element we are tracking
        updateMinimapTreasure('minimapSilverIcon', 'treasureSilver');
    }

    //-//

    // update speed
    if (ge('speedometerDiv'))
    {
        ge('speedometerDiv').innerHTML = 'Speed' + '<br>' + updateSpeedometer().toFixed(3);
    }

    //-//

    isPlayerMoving();

    //-//

    if (ge('collisionInfoDiv'))
    {
        ge('collisionInfoDiv').innerHTML = collidedElementId;
    }

    //-//

    if(collision(ourPlayer.id, "floor1"))
    {
        pushPlayerFromCollision();
    }
    
    if(collision(ourPlayer.id, "floor2"))
    {
        pushPlayerFromCollision();
    }
    
    if(collision(ourPlayer.id, "floor3"))
    {
        pushPlayerFromCollision();
    }

    if(collision(ourPlayer.id, "boxIron"))
    {
        pushPlayerFromCollision();
    }
    
    if(collision(ourPlayer.id, "boxCopper"))
    {
        pushPlayerFromCollision();
    }

    if(collision(ourPlayer.id, "boxSilver"))
    {
        pushPlayerFromCollision();
    }

    if(collision(ourPlayer.id, "boxGold"))
    {
        pushPlayerFromCollision();
    }

    //-//

    if (collisionBottomSide(ourPlayer.id, "boxCollideBottom"))
    {
        audioPlay("sfx_blip_001", 1.0);

        ge('minimap').style.borderColor = collisionColor001;

        ge('boxCollideBottom').style.backgroundColor = collisionColor002;

        collidedElementId = 'boxCollideBottom';

        setTimeout(function()
        {
            ge('boxCollideBottom').style.backgroundColor = "rgb(0, 0, 0)";

            ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
        }, 500);
    }

    if(collisionTopSide(ourPlayer.id, "boxCollideTop"))
    {
        audioPlay("sfx_blip_001", 1.0);

        ge('minimap').style.borderColor = collisionColor001;

        ge('boxCollideTop').style.backgroundColor = collisionColor002;

        collidedElementId = 'boxCollideTop';

        setTimeout(function()
        {
            ge('minimap').style.borderColor = 'rgb(255, 255, 255)';

            ge('boxCollideTop').style.backgroundColor = "rgb(0, 0, 0)";
        }, 500);
    }

    if(collisionLeftSide(ourPlayer.id, "boxCollideLeft"))
    {
        audioPlay("sfx_blip_001", 1.0);

        ge('minimap').style.borderColor = collisionColor001;

        ge('boxCollideLeft').style.backgroundColor = collisionColor002;

        collidedElementId = 'boxCollideLeft';

        setTimeout(function()
        {
            ge('boxCollideLeft').style.backgroundColor = "rgb(0, 0, 0)";

            ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
        }, 500);
    }

    if(collisionRightSide(ourPlayer.id, "boxCollideRight"))
    {
        audioPlay("sfx_blip_001", 1.0);

        ge('minimap').style.borderColor = collisionColor001;

        ge('boxCollideRight').style.backgroundColor = collisionColor002;

        collidedElementId = 'boxCollideRight';

        setTimeout(function()
        {
            ge('boxCollideRight').style.backgroundColor = "rgb(0, 0, 0)";

            ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
        }, 500);
    }

    //-//

    wasObjectLineCrossed(ourPlayer);

    wasLineCrossed();
 
    //-//

    keepPlayerInWorld();

    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

