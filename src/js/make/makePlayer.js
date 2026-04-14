// makePlayer.js

function makePlayer(whichPlayer)
{
    let player = ce('div');
    player.id = whichPlayer.id;
    player.style.position = 'absolute';
    player.style.left = whichPlayer.x + 'px';
    player.style.top = whichPlayer.y + 'px';
    // The div size MUST equal exactly ONE frame.
    player.style.width = "100px"; 
    player.style.height = "100px";

    // Load the sheet
    player.style.backgroundImage = "url('src/media/textures/swords_man/run_sprite_sheet.png')";

    // Make the background exactly as wide as the WHOLE sheet.
    // If the sheet is 8 frames of 100px, it's 800px total. 
    player.style.backgroundSize = "800px 100px"; 
    player.style.zIndex = '10';
    // Start it at the very first frame
    player.style.backgroundPosition = "0px 0px";

    // The new Grid Math
    player.style.backgroundSize = "600px 300px"; 

    // Start at the top-left frame
    player.style.backgroundPosition = "0px 0px";
    ba(player);
}

function updateSpriteFrame()
{
    let xOffset = -(currentFrame * frameWidth);

    // Grab the element by its ID, just like you did in the movement logic
    ge(ourPlayer.id).style.backgroundPosition = `${xOffset}px 0px`; 
    
    currentFrame = (currentFrame + 1) % totalRunFrames;
}

function makePlayer2(whichPlayer)
{
    let player = ce('div');
    player.id = whichPlayer.id;
    player.style.position = 'absolute';
    player.style.left = whichPlayer.x + 'px';
    player.style.top = whichPlayer.y + 'px';
    player.style.width = whichPlayer.width + 'px';
    player.style.height = whichPlayer.height + 'px';
    player.style.borderRadius = '0px';
    player.style.background = whichPlayer.texture;
    player.style.backgroundSize = 'cover';
    player.style.zIndex = '10';
    player.style.fontFamily = 'tahoma';
    player.style.fontSize = '13px';
    player.style.fontWeight = 'bold';
    player.style.textAlign = 'center';
    player.style.wordWrap = 'break-word';
    player.style.margin = '0px';
    player.style.padding = '0px';
    player.style.border = 'none';
    player.style.boxSizing = 'border-box';
    ba(player);
}

/*
source for the texture sprite sheet
https://opengameart.org/content/2d-game-character-pack-slim-version
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

