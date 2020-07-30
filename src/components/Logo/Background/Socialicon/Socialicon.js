import React from 'react';

import classes from './Socialicon.css';

const social = () => (
<div className = {classes.socialhead}>
    <ul className = {classes.socialicons}>
        <span className = {classes.word}>follow us :</span>
        <li><a href='http://facebook.com'><img src ={require('../../../../assets/fb.png')} alt = "fb"/></a></li>
        <li><a href='http://instagram.com'><img src ={require('../../../../assets/instaa.png')} alt = "instagram"/></a></li>
        <li><a href='http://twitter.com'><img src ={require('../../../../assets/twit.png')} alt = "twitter"/></a></li>
    </ul>
</div>
);

export default social;