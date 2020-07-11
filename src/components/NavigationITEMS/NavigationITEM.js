import React from  'react';


import classes from './NavigationITEM.css';

const navigationitem = (props) => (
    <li className = {classes.navigationitem}>
        <a href = {props.link}
        className = {props.active ? classes.active : null}>
            {props.children}</a>
        </li>
);

export default navigationitem;
