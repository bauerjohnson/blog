import React from  'react';


import classes from './NavigationITEM.css';

const navigationitem = (props) => (
    <ul className = {classes.navigationitem}>
        <li href = {props.link}
        className = {props.active ? classes.active : null}>
            {props.children}</li>
        </ul>
);

export default navigationitem;
