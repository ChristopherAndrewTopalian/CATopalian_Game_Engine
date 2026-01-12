// makePlayer.js

function makePlayer(whichPlayer)
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

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

