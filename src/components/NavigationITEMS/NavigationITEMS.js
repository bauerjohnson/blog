import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationITEMS.css';
import Navigationitem from '../NavigationITEMS/NavigationITEM';


const navigationitems = (props) => (
    <ul className = {classes.navigationitems}>
     
     <Navigationitem> <NavLink to = '/' active>LATEST</NavLink></Navigationitem>
     <Navigationitem>   <NavLink to = '/'>MUSIC</NavLink></Navigationitem>
     <Navigationitem>  <NavLink to = '/'>ENTERTAINMENT</NavLink></Navigationitem>
    </ul>
); 

export default navigationitems;