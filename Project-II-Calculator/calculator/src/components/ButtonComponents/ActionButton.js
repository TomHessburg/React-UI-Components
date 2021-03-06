import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.buttonStyle}>{props.number}</button>
    );
}

export default ActionButton;
