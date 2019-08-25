import React from 'react';
// eslint-disable-next-line
import  { BrowserRouter as Route, NavLink } from 'react-router-dom';

const blogPost = (props) => {
  return(
    <li className="blogPost-container">
      <div className="blogPost-user">
        <img alt="userImage" src={props.image} className="blogPost-image"></img>
        <ul>
          <li><b>Name:</b> {props.name}</li>
          <li><b>Email:</b> {props.email}</li>
          <li><b>Posts:</b> {props.posts}</li>
        </ul>
      </div>
      <div className="blogPost-content">
        <h2 className="blogPost-title">
          {props.blogTitle}
        </h2>
        <p className="blogPost-text">
          {props.text}
        </p>
        <NavLink exact to = {{
          pathname:'/blog/blogpost/', 
          state: {
            image: props.image,
            imageFull: props.imageFull,
            name: props.name,
            email: props.email,
            posts: props.posts,
            blogTitle: props.blogTitle,
            text: props.text,
            fullText: props.fullText
          }
        }}>
          <button className="post-link">
            Expand
          </button>
        </NavLink>
      </div>
    </li>
  )
}

export default blogPost;