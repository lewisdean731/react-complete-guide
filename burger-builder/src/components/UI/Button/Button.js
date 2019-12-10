import React from 'react';
import classes from './Button.module.css'
const button = (props) => (
    <button
        className={[classes.Button, classes[props.buttonType]].join(' ')}
        onClick={props.clicked}
        >
        {props.chilldren}
    </button>
);

export default button