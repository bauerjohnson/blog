import React from 'react';

import classes from '../footer/footer.css';
import Logo from '../../../Logo/Logo';
import Aux from '../../../../hoc/Auxilliary';

const footer = () => (
    <Aux>
<div className = {classes.footer}>
    <div className = {classes.innerfooter}>
<div className = {classes.logocontain}><Logo/></div>
<div className = {classes.footer3}>

    <h1>need help ?</h1>
    <a href="#">contact us</a>
    <a href="#">privacy policy</a>
    <a href="#">terms and condition</a>
</div>
<div className = {classes.footer3}>

    <h1>quick link</h1>
   <li><a href="#">event</a></li>
   <li><a href="#">about us</a></li>
  <li> <a href="#">donate</a></li>
</div>
<div className = {classes.footer4}>

    <h1>follow us</h1>
  <li> <a href="#"><img src = {require('../../../../assets/twit.png')}/></a></li>
  <li> <a href="#"><img src = {require('../../../../assets/fb.png')}/></a></li>
  <li> <a href="#"><img src = {require('../../../../assets/instaa.png')}/></a></li>

  {/* <span>
  Midst first it, you're multiply divided.
   There don't, second his one given the he one third 
   rule fruit, very. Fill. Seed give firmament doesn't 
   isn't lesser creeping. Abundantly you called signs 
   waters yielding he cattle greater were evening.
    Sixth make movi
  </span> */}
</div>
    </div>

</div>
</Aux>
)

export default footer;