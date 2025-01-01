// updateMinimapPlayer.js

function updateMinimapPlayer()
{
    // calculate minimap pos for ourPlayer.id
    // convert to percentage
    let minimapX = (ourPlayer.x / backgroundSizeX) * 100;
    
    // convert to percentage
    let minimapY = (ourPlayer.y / backgroundSizeY) * 100;

    // set pos of minimap player
    ge('minimapPlayer').style.left = `${minimapX}%`;
    ge('minimapPlayer').style.top = `${minimapY}%`;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

