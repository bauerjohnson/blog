import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationITEMS.css';
import Navigationitem from '../NavigationITEMS/NavigationITEM';


const navigationitems = (props) => (
    <ul className = {classes.navigationitems}>

     <Navigationitem>  <NavLink to = '/'>HOME</NavLink></Navigationitem>
     {/* <Navigationitem> <NavLink to = '/latest' >LATEST</NavLink></Navigationitem> */}
     <Navigationitem><NavLink to = '/news'>NEWS</NavLink></Navigationitem>
     
    </ul>
); 

export default navigationitems;