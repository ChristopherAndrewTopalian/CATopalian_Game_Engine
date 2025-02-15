// makeDedication.js

function makeDedication()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDivDedication';
    mainDiv.className = 'mainDiv';
    mainDiv.style.zIndex = 3000;
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 1700 + 'px';
    mainDiv.style.top = 80 + 'px';
    mainDiv.style.width = 350 + 'px';
    mainDiv.style.border = 'solid 2px rgb(255, 255, 255)';
    mainDiv.style.borderRadius = '8px';
    mainDiv.style.paddingLeft = '4px';
    mainDiv.style.paddingRight = '4px';
    mainDiv.style.paddingTop = '8px';
    mainDiv.style.paddingBottom = '8px';
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'column';
    subDiv.className = 'textStyle002';
    subDiv.style.textAlign = 'center';
    mainDiv.append(subDiv);

    //-//

    let dedicationText = ce('div');
    dedicationText.textContent = 'Dedicated to God the Father';
    dedicationText.style.fontWeight = 'bold';
    subDiv.append(dedicationText);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let engineText = ce('div');
    engineText.textContent = 'TOPALIAN GAME ENGINE';
    engineText.style.fontWeight = 'bold';
    engineText.style.fontSize = 24 + 'px';
    subDiv.append(engineText);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let engineLink = ce('a');
    engineLink.textContent = 'https://github.com/ChristopherAndrewTopalian/Topalian_Game_Engine';
    engineLink.href = 'https://github.com/ChristopherAndrewTopalian/Topalian_Game_Engine';
    engineLink.target = '_blank';
    engineLink.style.fontWeight = 'bold';
    subDiv.append(engineLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

