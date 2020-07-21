import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import Navigationitems from './../../NavigationITEMS/NavigationITEMS';


const toolbar = (props) => (
    <header className = {classes.Toolbar}>

<Logo/>
<nav className = {classes.desktop}>
        <Navigationitems/>
    </nav>
    </header>
   
);

export default toolbar;
