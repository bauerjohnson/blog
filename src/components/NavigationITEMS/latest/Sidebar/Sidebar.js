import React, {useState, useEffect} from 'react';
import Card from '../../../UI/Card/Card';
import classes from './Sidebar.css';
import blogdetails from '../../../../container/blog.json';
import {NavLink} from 'react-router-dom';



const sidebar = (props) => {
  const[posts,setPosts] = useState([]);

  useEffect(() =>{
      
      const posts = blogdetails.data;
      setPosts(posts);
      
  },[posts]);


return (
    <div className = {classes.sidebar} style = {{width:props.width}}>
  <Card>
      <div className = {classes.header}>
       <span>sport</span>
</div>
       <div className = {classes.barca}>
       <img src ={require('../../../../assets/barca.jpg')} alt = "image"/>
      
          </div>
  </Card>

  <div className = {classes.sporttext}>
<p>barcelona dominate once again</p>

  </div>

  <Card style = {{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}>
    <div className = {classes.recentpostH}>
      <span>RECENT POST</span>
    </div>

    {
      posts.map(post => {
        return (
          <NavLink key = {post.id} to = {`/latest/${post.id}`}>
<div className = {classes.recentpost}>
        <h3>{post.blogTitle}</h3>
        <span>{post.postedOn}</span>

 </div>
 </NavLink>
        )
      })
    }
 

 
  </Card>
  
  </div>
);
}
export default sidebar;