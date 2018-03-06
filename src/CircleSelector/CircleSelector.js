import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            <button className={props.selected === 0 ? 'selected' : ''} onClick={() => props.changeCircle(0)}>SELECT CIRCLE 1</button>
            <button className={props.selected === 1 ? 'selected' : ''} onClick={() => props.changeCircle(1)}>SELECT CIRCLE 2</button>
            <button className={props.selected === 2 ? 'selected' : ''} onClick={() => props.changeCircle(2)}>SELECT CIRCLE 3</button>
            <button className={props.selected === 3 ? 'selected' : ''} onClick={() => props.changeCircle(3)}>SELECT CIRCLE 4</button>
        </div>
    )
}

export default CircleSelector