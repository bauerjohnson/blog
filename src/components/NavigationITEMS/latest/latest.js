import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Blogpost from './Blogpost/Blogpost';
import Aux from '../../../hoc/Auxilliary';
import Sidebar from './Sidebar/Sidebar';
import classes from '../latest/latest.css';

const latest = (props) => {

    console.log(props)
 return (
  <div className = {classes.latest}> 
   <Aux>
     
<Blogpost {...props} />
<Sidebar />
</Aux>
</div>
);
 }
export default latest;