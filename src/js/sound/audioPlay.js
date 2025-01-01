// audioPlay.js

function audioPlay(whichAudioId, theVolume)
{
    let theAudio = ge(whichAudioId);

    theAudio.play();

    theAudio.volume = theVolume;

    if (ge("infoSongStatusDiv"))
    {
        ge("infoSongStatusDiv").innerHTML = whichAudioId;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

