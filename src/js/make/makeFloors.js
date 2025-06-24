// makeFloors.js

function makeFloors(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        //let theElement = ce(whichArray[x].type);
        let theElement = ce('div');
        theElement.style.border = 'solid 1px rgb(255, 255, 255)';
        //theElement.style.position = whichArray[x].positionType;

        theElement.style.position = 'absolute';

        theElement.style.left = whichArray[x].x + "px";

        theElement.style.top = whichArray[x].y + "px";

        theElement.style.width = whichArray[x].width + "px";

        theElement.style.height = whichArray[x].height + "px";

        theElement.textContent = 'test';

        theElement.style.color = 'rgb(255, 255, 255)';

        // theElement.id = whichArray[x].id;

        //theElement.title = whichArray[x].name;

        //theElement.className = whichArray[x].styleName;

        theElement.style.zIndex = 100000;

        ba(theElement);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

