import React from 'react';
import classes from '../Cars/Cars.css';

const cars = (props) => (
<div className = {classes.cars} {...props}>
    {props.children}
    </div>
);


export default cars;