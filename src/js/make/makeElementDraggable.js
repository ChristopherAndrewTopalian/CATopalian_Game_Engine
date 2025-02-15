// makeElementDraggable.js

// creating event handler for mouse down
function createMouseDownHandler(element, state) {
    return function(e)
    {
        // ignore mouse down events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        document.onmousemove = createMouseMoveHandler(element, state);

        document.onmouseup = createMouseUpHandler();
    };
}

// creating event handler for mouse move
function createMouseMoveHandler(element, state) {
    return function(e)
    {
        // ignore mouse move events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        let deltaX = state.startX - e.clientX;
        let deltaY = state.startY - e.clientY;

        state.startX = e.clientX;
        state.startY = e.clientY;

        let newTop = element.offsetTop - deltaY;
        let newLeft = element.offsetLeft - deltaX;

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";

        rezPositionLeft = newLeft;
        rezPositionTop = newTop;
    };
}

// creating event handler for mouse up
function createMouseUpHandler()
{
    return function()
    {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

// make an element draggable
function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.onmousedown = createMouseDownHandler(element, state);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

