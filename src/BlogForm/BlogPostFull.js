import React from 'react';
import '../Static/Styles/css/blogPost.min.css';

const blogPostFull = (props) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <div className="blogPostFull-container">
      <div className="blogPostFull-center">
        <div className="blogPostFull-user">
          <img alt="userImage" className="blogPostFull-image" src={props.location.state.image} />
          <ul>
            <li><b>Name:</b> {props.location.state.name}</li>
            <li><b>Email:</b> {props.location.state.email}</li>
            <li><b>Posts:</b> {props.location.state.posts}</li>
          </ul>
          <button type="button" className="btn-to-blog" onClick={()=>window.history.back()}>Back to Blogs</button>
        </div>
        <div className="blogPostFull-content">
          <h2 className="blogPostFull-title"> {props.location.state.blogTitle} </h2>
          <p className="blogPostFull-text"> {props.location.state.text} </p>
          <img alt="blogfull-img" className="blogPostFull-content-images" src={props.location.state.imageFull[0]} />
          <p className="blogPostFull-text"> {props.location.state.fullText} </p>
          <img alt="blogfull-img" className="blogPostFull-content-images" src={props.location.state.imageFull[1]} />
          <img alt="blogfull-img" className="blogPostFull-content-images" src={props.location.state.imageFull[2]} />
          <img alt="blogfull-img" className="blogPostFull-content-images" src={props.location.state.imageFull[3]} />
          <img alt="blogfull-img" className="blogPostFull-content-images" src={props.location.state.imageFull[4]} />
        </div>
      </div>
    </div>
  )
}

export default blogPostFull;