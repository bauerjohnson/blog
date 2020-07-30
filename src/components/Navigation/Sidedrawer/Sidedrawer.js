import React from  'react';

import classes from './Sidedrawer.css';

import Logo from '../../Logo/Logo';
import Navigationitems from '../../NavigationITEMS/NavigationITEMS';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';
import Social from '../../Logo/Background/Socialicon/Socialicon';


const sidedrawer = (props) => {
    let attachclass = [classes.Sidedrawer, classes.close];
    if (props.open) {
        attachclass = [classes.Sidedrawer, classes.open];
    }
    return (
        <Aux>
        <Backdrop show = {props.open} clicked = {props.closed}/> 
        <div className = {attachclass.join(' ')}>
            <Logo/>
     <nav className = {classes.navigate}>
<Navigationitems/>

     </nav>
    <div className = {classes.social}>
    <Social />
        </div> 
     
        </div>
        </Aux>
    )
}

export default sidedrawer;