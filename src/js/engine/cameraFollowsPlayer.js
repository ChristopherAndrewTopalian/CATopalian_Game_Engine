// cameraFollowsPlayer.js

function cameraFollowsPlayer()
{
    if (ge(ourPlayer.id))
    {
        ge(ourPlayer.id).scrollIntoView(
        {
            block: "center",
            inline: "center"
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

