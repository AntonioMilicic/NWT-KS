import React from 'react';
// eslint-disable-next-line
import  { BrowserRouter as Route, NavLink } from 'react-router-dom';

const blogPost = (props) => {
  return (
    <li className="blogPost-container">
      <div className="blogPost-user">
        <img alt="userImage" src={props.image} className="blogPost-image"></img>
        <ul>
          <li>Name: {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Posts: {props.posts}</li>
        </ul>
      </div>
      <div className="blogPost-content">
        <h2 className="blogPost-title">
          {props.blogTitle}
        </h2>
        <p className="blogPost-text">
          {props.text}
        </p>
        <NavLink exact to = {'/blog/blogpost'}>
          <button className="post-link">
            Expand
          </button>
        </NavLink>
      </div>
    </li>
  );
}

export default blogPost;