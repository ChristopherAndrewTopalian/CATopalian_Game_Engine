// menuFloors.js

// floors to use in the menuFloors
let floors = [
    {
        name: 'floor1', 
        width: 100,
        height: 20
    },

    {
        name: 'floor2', 
        width: 200,
        height: 20
    },

    {
        name: 'floor3', 
        width: 300,
        height: 20
    }
];

function menuFloors(whichArray)
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'fixed';
    mainDiv.style.right = 0 + 'px';
    mainDiv.style.bottom = gr('thePlayer').y + 'px';
    mainDiv.style.zIndex = 100000;
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    // make menu container
    let container = ce('div');
    container.id = 'floorMenu';
    container.style.width = 300 + 'px';
    container.style.height = 200 + 'px';
    //container.style.display = 'grid';
    //container.style.gridTemplateColumns = '100px 100px 100px';
    container.style.gap = '10px'; 
    container.style.border = 'solid 1px rgb(255, 255, 255)';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    container.style.overflowX = 'scroll';
    container.style.overflowY = 'scroll';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.textContent = 'Floors';
    container.style.cursor = 'pointer';
    subDiv.append(container);

    makeElementDraggable(container);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.className = "buttonStyle001";
    closeButton.style.position = "absolute";
    closeButton.style.left = 0 + "px";
    closeButton.style.top = -22 + "px";
    closeButton.style.fontSize = '10px';
    closeButton.onclick = function()
    {
        clickSound();
        //audioPlay("sfx_warp_001", 1.0);

        // minimize height to show only _ and O
        ge("floorMenu").style.height = 0 + "px";

        ge("floorMenu").style.display = 'none';
    };
    subDiv.append(closeButton);

    //-//

    // add the floors to the container
    for (let x = 0; x < whichArray.length; x++)
    {
        let theFloor = ce('div');
        theFloor.style.width = whichArray[x].width + 'px';
        theFloor.style.height = whichArray[x].height + 'px';
        theFloor.style.border = 'solid 1px rgb(255, 255, 255)';
        theFloor.title = whichArray[x].name;
        theFloor.textContent = whichArray[x].name;

        theFloor.onmouseover = function()
        {
            hoverSound2();
        };

        theFloor.onclick = function()
        {
            clickSound();

            // rez the chosen floor on the page
            let rezzedFloor = ce('div');
            rezzedFloor.className = 'floor';
            rezzedFloor.id = whichArray[x].name;
            rezzedFloor.style.position = 'absolute';
            rezzedFloor.style.left = ge('thePlayer').style.left;

            rezzedFloor.style.top = ge('thePlayer').style.top;

            rezzedFloor.style.width = whichArray[x].width + 'px';

            rezzedFloor.style.height = whichArray[x].height + 'px';

            rezzedFloor.style.border = 'solid 1px rgb(255, 255, 255)';

            rezzedFloor.textContent = whichArray[x].name;

            rezzedFloor.style.paddingLeft = '4px';
            rezzedFloor.style.paddingRight = '4px';

            rezzedFloor.style.zIndex = 1200;
            ba(rezzedFloor);

            makeElementDraggable(rezzedFloor);

            // remove the floor menu
            // container.remove();
        };
        container.append(theFloor);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

