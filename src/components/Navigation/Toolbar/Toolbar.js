import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import Navigationitems from './../../NavigationITEMS/NavigationITEMS';
import Drawertoggle from '../Sidedrawer/drawertoggle/drawertoggle';



const toolbar = (props) => (
    <header className = {classes.Toolbar}>
<Drawertoggle clicked ={props.drawerclicked}/>
<Logo/>
<nav className = {classes.desktop}>
        <Navigationitems/>
       
    </nav>
    </header>
   
);

export default toolbar;
