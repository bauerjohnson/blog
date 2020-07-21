import React from 'react';
import classes from './Card.css';

const card = (props) => (
<div className = {classes.card} {...props}>
    {props.children}
    </div>
);


export default card;