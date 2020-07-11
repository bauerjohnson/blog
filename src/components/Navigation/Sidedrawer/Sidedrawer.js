import React from  'react';

import classes from './Sidedrawer.css';

import Logo from '../../Logo/Logo';
import Navigationitems from '../../NavigationITEMS/NavigationITEMS';

const sidedrawer = () => {
    //.
    return (
        <div className = {classes.Sidedrawer}>
     <Logo/>
     <nav>
<Navigationitems/>
     </nav>
        </div>
    )
}

export default sidedrawer;