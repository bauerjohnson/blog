import React, {useState, useEffect} from 'react';

import classes from './Blogpost.css';
import Card from '../../../UI/Card/Card';
import blogdetails from '../../../../container/blog.json';




const blogpost = (props) => {

    const[post,setPost] = useState({

        id: 1,
        blogCategory: '',
        blogTitle : '',
        slug: '',
        postedOn: '',
        author: '',
        blogImage: '',
        blogText:''
    });

    const [postId, setPostId] = useState('');

    useEffect(() =>{
        const postId = props.match.params.postId;
        const post = blogdetails.data.find(post => post.id == postId);
        setPost(post);
        setPostId(postId)
        
    },[post, props.match.params.postId]);

    if(post.blogImage == '')return null;
    return (
  
// {/* <Card style={{width : '70%'}}> */}
<div className = {classes.blogpost}>
    <Card>
        <div className = {classes.blogheader}>
           
    <span className = {classes.category} >{post.blogCategory}</span>
         <h1 className = {classes.header}>{post.blogTitle}</h1>
    
    <span className = {classes.blogdate}>posted {post.postedOn} by {post.author}</span>
<div className = {classes.postimage1}>
<img src ={require(`../../../../assets/${post.blogImage}`)} alt = "allsafe"/>

</div>
</div>

<div className = {classes.postcontent}>
    <h3>{post.blogTitle}</h3>
    <p>{post.blogText}</p>
</div>
        </Card>

</div>

)
    }
export default blogpost;