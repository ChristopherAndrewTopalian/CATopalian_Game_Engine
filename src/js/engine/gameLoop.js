// gameLoop.js

function gameLoop()
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

    collision(ourPlayer.id, "floor1");
    collision(ourPlayer.id, "floor2");
    collision(ourPlayer.id, "floor3");

    collision(ourPlayer.id, "boxIron");
    collision(ourPlayer.id, "boxCopper");
    collision(ourPlayer.id, "boxSilver");
    collision(ourPlayer.id, "boxGold");

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

