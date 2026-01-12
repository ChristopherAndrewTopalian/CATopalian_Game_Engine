// audioPause.js

function audioPause(whichAudioId)
{
    let theAudio = ge(whichAudioId);

    theAudio.pause();

    ge("infoSongStatusId").innerHTML = "Song Stopped";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

