import React from 'react';
import './Circles.css'

const Circles = (props) => {
    return (
        <div className="Circles">
            <div className={props.selected === 0 ? 'selected' : ''}>1</div>
            <div className={props.selected === 1 ? 'selected' : ''}>2</div>
            <div className={props.selected === 2 ? 'selected' : ''}>3</div>
            <div className={props.selected === 3 ? 'selected' : ''}>4</div>
        </div>
    )
}

export default Circles