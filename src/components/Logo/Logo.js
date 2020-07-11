import React from 'react';

import blurlogo from './../../assets/blogpic.png';
import classes from './Logo.css';

const logo = (props) => (
<div className = {classes.Logo} >

<img src = {blurlogo} alt = 'logo'/>
</div>
);

export default logo;