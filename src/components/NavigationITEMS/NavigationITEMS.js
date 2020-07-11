import React from 'react';

import classes from './NavigationITEMS.css';
import Navigationitem from '../NavigationITEMS/NavigationITEM';


const navigationitems = (props) => (
    <ul className = {classes.navigationitems}>
      <Navigationitem link = '/' active>LATEST</Navigationitem>
       <Navigationitem link = '/'>MUSIC</Navigationitem>
       <Navigationitem LINK = '/'>ENTERTAINMENT</Navigationitem>
    </ul>
); 

export default navigationitems;