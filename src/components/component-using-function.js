import React from 'react';

export function Pane({ value, pouch }) {
    let counter = 0;
    function handleClick() {
        counter += 1;
        value *= counter;
    }
    // Seems to not update view, when model gets updated
    return (
        <div>
            <div>Can be used to display something. There is no state in functional components</div>
            <div>{`$${value} in the ${pouch}`}</div>
            <button onClick={() => handleClick()}>Click Me!</button>
        </div>
    );
}
