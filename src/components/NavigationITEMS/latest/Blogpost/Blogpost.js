import React from 'react';

import classes from './Blogpost.css';
import Card from '../../../UI/Card/Card';




const blogpost = (props) => (
  
// {/* <Card style={{width : '70%'}}> */}
<div className = {classes.blogpost}>
    <Card>
        <div className = {classes.blogheader}>
        <span>latest</span>
<h1 className = {classes.header}>technology is evolving</h1>
<span>posted july 21 2020 by jj</span>
</div>
        </Card>

</div>

)

export default blogpost;