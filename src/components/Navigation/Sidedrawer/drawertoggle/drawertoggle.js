import React from 'react';

import classes from '../drawertoggle/drawertoggle.css';

const drawertoggle = (props) => (
  <div className = {classes.drawertoggle} onClick = {props.clicked}>&#9776;
  </div>  
);

export default drawertoggle;