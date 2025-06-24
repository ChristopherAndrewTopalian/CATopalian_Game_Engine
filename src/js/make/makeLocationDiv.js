// makeLocationDiv.js

function makeLocationDiv()
{
    let container = ce('div');
    container.style.position = 'fixed';
    container.style.right = '0px';
    container.style.top = '50px';
    container.style.zIndex = 1000;
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    ba(container);

    //-//

    let xPosDiv = ce('div');
    xPosDiv.id = 'xPosDiv';
    xPosDiv.textContent = 'x';
    xPosDiv.className = 'textStyle001';
    xPosDiv.title = 'makeXPosDiv()';
    xPosDiv.style.color = 'rgb(255, 150, 150)';
    xPosDiv.style.textShadow = '1px 1px rgb(0, 0, 0)';
    container.append(xPosDiv);

    //-//

    let yPosDiv = ce('div');
    yPosDiv.id = 'yPosDiv';
    yPosDiv.textContent = 'y';
    yPosDiv.className = 'textStyle001';
    yPosDiv.title = 'makeYPosDiv()';
    yPosDiv.style.color = 'rgb(30, 255, 30)';
    yPosDiv.style.textShadow = '1px 1px rgb(0, 0, 0)';
    container.append(yPosDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

