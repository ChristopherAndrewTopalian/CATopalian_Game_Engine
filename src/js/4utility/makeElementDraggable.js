// makeElementDraggable.js

function createMouseDownHandler(element, state)
{
    return function(e)
    {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        function mouseMoveHandler(e)
        {
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
        }

        function mouseUpHandler()
        {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
}

function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.addEventListener('mousedown', createMouseDownHandler(element, state));
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

