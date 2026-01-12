// makeMinimap.js

function makeMinimap()
{
    let minMaxContainer = ce('div');
    minMaxContainer.style.position = 'fixed';
    minMaxContainer.style.left = '110px';
    minMaxContainer.style.bottom = '0px';
    minMaxContainer.style.zIndex = 2001;
    minMaxContainer.style.display = 'flex';
    minMaxContainer.style.flexDirection = 'row';
    ba(minMaxContainer);

    //-//

    let minimize = ce('button');
    minimize.className = 'buttonSlim';
    minimize.textContent = '_';
    minimize.onclick = function()
    {
        ge('minimap').style.display = 'none';
        clickSound2();
    };
    minMaxContainer.append(minimize);

    //-//

    let maximize = ce('button');
    maximize.className = 'buttonSlim';
    maximize.textContent = 'O';
    maximize.onclick = function()
    {
        ge('minimap').style.display = 'block';
        clickSound2();
    };
    minMaxContainer.append(maximize);

    //-//

    let minimapDiv = ce('div');
    minimapDiv.id = 'minimap';
    minimapDiv.className = 'minimapDiv';
    minimapDiv.style.position = 'fixed';
    minimapDiv.style.left = '5px';
    minimapDiv.style.bottom = '4px';
    minimapDiv.style.width = '100px';
    minimapDiv.style.height = '100px';
    minimapDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    minimapDiv.style.border = 'solid';
    minimapDiv.style.borderWidth = '1px';
    minimapDiv.style.borderRadius = '1px';
    minimapDiv.style.zIndex = 2000;
    minimapDiv.style.overflow = 'hidden';
    minimapDiv.style.cursor = 'pointer';
    ba(minimapDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

