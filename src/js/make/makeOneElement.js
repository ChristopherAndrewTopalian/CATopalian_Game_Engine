// makeOneElement.js

function makeOneElement(theName, theNumber, theLink, xPos, yPos)
{
    let topicDiv = ce("div");
    topicDiv.id = theName;
    topicDiv.style.position = "absolute";
    topicDiv.style.left = xPos + 50;
    topicDiv.style.top = yPos - 50;
    topicDiv.style.width = "163px";
    topicDiv.style.padding = "10px";
    topicDiv.style.zIndex = "2";
    topicDiv.style.borderStyle = "solid";
    topicDiv.style.borderColor = "rgb(255, 255, 255)";
    topicDiv.style.background = "rgb(0, 0, 0)";
    topicDiv.style.fontFamily = "tahoma";
    topicDiv.style.fontSize = "20px";
    topicDiv.style.fontWeight = "bold";
    topicDiv.style.color = "rgb(255, 255, 255)";
    topicDiv.style.textAlign = "center";
    topicDiv.innerHTML = theName + "<br>";
    topicDiv.innerHTML += theNumber + "<br>";
    topicDiv.innerHTML += '<a href = \'' +theLink+ '\' target = "_blank"> Link </a>';
    ba(topicDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

