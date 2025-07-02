// menuLeft.js

function menuLeft()
{
    let menuId = 'menuLeftDiv';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    let divHeight = 90;

    let menuLeftDiv = ce("div");
    menuLeftDiv.id = menuId;
    menuLeftDiv.style.position = "fixed";
    menuLeftDiv.style.left = "0px";
    menuLeftDiv.style.top = "20px";
    menuLeftDiv.style.margin = "2px";
    menuLeftDiv.style.zIndex = 1000;
    ba(menuLeftDiv);

    //-//

    let minimizeButton = ce("button");
    minimizeButton.textContent = "_";
    minimizeButton.className = "buttonStyle001";
    minimizeButton.style.position = "absolute";
    minimizeButton.style.left = "0px";
    minimizeButton.style.top = "-22px";
    minimizeButton.style.fontSize = "10px";
    minimizeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);
        ge("menuLeftSubDiv").style.height = "0px";
        ge("menuLeftSubDiv").style.display = "none";
    };
    menuLeftDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce("button");
    maximizeButton.textContent = "O";
    maximizeButton.className = "buttonStyle001";
    maximizeButton.style.position = "absolute";
    maximizeButton.style.left = "30px";
    maximizeButton.style.top = "-22px";
    maximizeButton.style.fontSize = "10px";
    maximizeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);
        ge("menuLeftSubDiv").style.height = divHeight + "px";
        ge("menuLeftSubDiv").style.display = "block";
    };
    menuLeftDiv.append(maximizeButton);

    //-//

    let menuLeftSubDiv = ce("div");
    menuLeftSubDiv.id = "menuLeftSubDiv";
    menuLeftSubDiv.style.position = "fixed";
    menuLeftSubDiv.style.left = "0px";
    menuLeftSubDiv.style.top = "35px";
    menuLeftSubDiv.style.margin = "2px";
    menuLeftSubDiv.style.width = "190px";
    menuLeftSubDiv.style.height = divHeight + "px";
    menuLeftSubDiv.style.overflowY = "auto";
    menuLeftSubDiv.style.resize = "both";
    menuLeftSubDiv.style.whiteSpace = "nowrap";
    menuLeftSubDiv.style.zIndex = 1001;
    menuLeftSubDiv.style.border = "1px solid rgb(255, 255, 255)";
    menuLeftSubDiv.style.borderRadius = "8px";
    menuLeftSubDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    ba(menuLeftSubDiv);

    //-//

    let showInstructionsButton = ce("button");
    showInstructionsButton.textContent = 'Show Instructions';
    showInstructionsButton.className = "buttonStyle001";
    showInstructionsButton.title = 'Show Instructions';
    showInstructionsButton.style.width = 'auto';
    showInstructionsButton.style.fontSize = '15px';
    showInstructionsButton.style.display = "flex";
    showInstructionsButton.style.flexDirection = "row";

    showInstructionsButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        showInstructions();

        // hide the menu upon button click
        ge("menuLeftSubDiv").style.height = "0px";

        ge("menuLeftSubDiv").style.display = "none";
    };
    menuLeftSubDiv.append(showInstructionsButton);

    //-//

    let hideInstructionsButton = ce("button");
    hideInstructionsButton.textContent = 'Hide Instructions';
    hideInstructionsButton.className = "buttonStyle001";
    hideInstructionsButton.title = 'Hide Instructions';
    hideInstructionsButton.style.width = 'auto';
    hideInstructionsButton.style.fontSize = '15px';
    hideInstructionsButton.style.display = "flex";
    hideInstructionsButton.style.flexDirection = "row";

    hideInstructionsButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        hideInstructions();

        // hide the menu upon button click
        ge("menuLeftSubDiv").style.height = "0px";

        ge("menuLeftSubDiv").style.display = "none";
    };
    menuLeftSubDiv.append(hideInstructionsButton);

    //-//

    let playSongButton = ce("button");
    playSongButton.textContent = 'Play Song';
    playSongButton.className = "buttonStyle001";
    playSongButton.title = 'Play Song';
    playSongButton.style.width = 'auto';
    playSongButton.style.fontSize = '15px';
    playSongButton.style.display = "flex";
    playSongButton.style.flexDirection = "row";

    playSongButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        audioPlay('Lonely_Mountain');

        // hide the menu upon button click
        ge("menuLeftSubDiv").style.height = "0px";

        ge("menuLeftSubDiv").style.display = "none";
    };
    menuLeftSubDiv.append(playSongButton);

    //-//

    let pauseSongButton = ce("button");   pauseSongButton.textContent = 'Pause Song';
    pauseSongButton.className = "buttonStyle001";
    pauseSongButton.title = 'Pause Song';
    pauseSongButton.style.width = 'auto';
    pauseSongButton.style.fontSize = '15px';
    pauseSongButton.style.display = "flex";
    pauseSongButton.style.flexDirection = "row";

    pauseSongButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        audioPause('Lonely_Mountain');

        // hide the menu upon button click
        ge("menuLeftSubDiv").style.height = "0px";

        ge("menuLeftSubDiv").style.display = "none";
    };
    menuLeftSubDiv.append(pauseSongButton);

    //-//

    // create output display
    let output = ce('div');
    output.id = 'output';
    output.style.marginTop = '140px';
    ba(output);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

