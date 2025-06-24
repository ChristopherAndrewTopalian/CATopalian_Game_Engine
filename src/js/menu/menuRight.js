// menuRight.js

let result = [];

function menuRight()
{
    let menuId = 'menuRight';

    // if menuId exists
    if (ge(menuId))
    {
        // remove menuId
        ge(menuId).remove();
    }

    //-//

    let divHeight = 100;

    //-//

    let menuRightDiv = ce("div");
    menuRightDiv.id = menuId;
    menuRightDiv.style.position = "fixed";
    menuRightDiv.style.right = 0 + "px";
    menuRightDiv.style.top = 17 + "px";menuRightDiv.style.margin = '2px';
    menuRightDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    menuRightDiv.style.zIndex = 1000;
    ba(menuRightDiv);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "_";
    closeButton.className = "buttonStyle001";
    closeButton.style.position = "absolute";
    closeButton.style.right = 30 + "px";
    closeButton.style.top = -22 + "px";
    closeButton.style.fontSize = '10px';
    closeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);

        // minimize height to show only _ and O
        ge("menuRightSubDiv").style.height = 0 + "px";

        ge("menuRightSubDiv").style.display = 'none';
    };
    menuRightDiv.append(closeButton);

    //-//

    let maximizeButton = ce("button");
    maximizeButton.textContent = "O";
    maximizeButton.className = "buttonStyle001";
    maximizeButton.style.position = "absolute";
    maximizeButton.style.fontSize = '10px';
    maximizeButton.style.right = 0 + "px";
    maximizeButton.style.top = -22 + "px";
    maximizeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);

        ge("menuRightSubDiv").style.height = divHeight + "px";

        ge("menuRightSubDiv").style.display = 'block';
    };
    menuRightDiv.append(maximizeButton);

    //-//

    let menuRightSubDiv = ce("div");
    menuRightSubDiv.id = "menuRightSubDiv";
    menuRightSubDiv.style.position = "fixed";
    menuRightSubDiv.style.right = 0 + "px";
    menuRightSubDiv.style.top = 30 + "px";
    menuRightSubDiv.style.margin = 2 + "px";
    menuRightSubDiv.style.width = '190px';
    menuRightSubDiv.style.height = divHeight + "px";
    menuRightSubDiv.style.zIndex = 1001;
    menuRightSubDiv.style.borderStyle = 'solid';
    menuRightSubDiv.style.borderWidth = '1px';
    menuRightSubDiv.style.borderColor = 'rbg(255, 255, 255)';
    menuRightSubDiv.style.borderRadius = '8px';
    menuRightSubDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    menuRightSubDiv.style.overflowY = "scroll";
    menuRightSubDiv.style.resize = "both";
    //menuRightSubDiv.style.whiteSpace = 'nowrap';
    menuRightSubDiv.style.display = 'flex';
    menuRightSubDiv.style.flexDirection = 'column';
    menuRightSubDiv.style.padding = 2 + 'px';
    ba(menuRightSubDiv);

    //-//

    // build
    let buildOnButton = ce('button');
    buildOnButton.textContent = 'Build On';
    buildOnButton.onclick = function()
    {
        // open floors menu
        menuFloors(floors);

        // minimize height to show only _ and O
        ge("menuRightSubDiv").style.height = 0 + "px";

        ge("menuRightSubDiv").style.display = 'none';
    };
    menuRightSubDiv.append(buildOnButton);

    //-//

    // save locations
    let saveButton = ce('button');
    saveButton.textContent = 'Save All';
    saveButton.onclick = function()
    {
        let floors = document.querySelectorAll('.floor');

        for (let x = 0; x < floors.length; x++)
        {
            result.push(
                {
                    name: floors[x].id,
                    x: floors[x].style.left, y: floors[x].style.top
                }
            );
        }
        cl(JSON.stringify(result));
    };
    menuRightSubDiv.append(saveButton);

    //-//

    // countButton
    let countButton = ce('button');
    countButton.id = 'countButton';
    countButton.textContent = 'How many objects';
    countButton.className = 'buttonStyle001';
    countButton.onclick = function()
    {
        audioPlay("sfx_blip_001", 1.0);
        alert(countAllElements());
    };
    menuRightSubDiv.append(countButton);

    //-//

    ge("menuRightSubDiv").style.height = 0 + "px";

    ge("menuRightSubDiv").style.display = 'none';
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

