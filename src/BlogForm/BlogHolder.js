import React,{ Component } from 'react';
import BlogPost from './BlogPost.js';
import '../Static/Styles/css/blog.min.css';

import { fetchBlogLenght } from '../ServerFunctions/getFunctions.js';
import { fetchBlogs } from '../ServerFunctions/postFunctions';

class blogHolderComponent extends Component {
  constructor() {
    super ();
    this.state = {
      blogs: [],
      fullBlogsLength: "",
      pageToLoad: 1
    }
  }

  async componentDidMount() {
    const blogsLenght = await fetchBlogLenght();
    this.setState({
      fullBlogsLength: blogsLenght[0].max
    })
    await this.updateBlogPage(1);
    document.querySelector(".nav-blog-container").classList.toggle('blog-is-loading');
  }

  async updateBlogPage(previousPageState) {
    const blogs = await fetchBlogs(previousPageState, this.state.pageToLoad);
    this.setState({
      blogs: blogs
    });
    this.handleArrowDisplay();
  }

  async handlePage(command) {
    if (command === "previous" && this.state.pageToLoad > 1) {
      await this.setState({
        pageToLoad: this.state.pageToLoad-1
      })
      this.updateBlogPage(this.state.pageToLoad+1);
      }
    else if (command === "next" && this.state.pageToLoad < (this.state.fullBlogsLength/5)){
      await this.setState({
        pageToLoad: this.state.pageToLoad+1
      })
      this.updateBlogPage(this.state.pageToLoad-1);
    }
  }

  handleArrowDisplay() {
    if(this.state.pageToLoad === 1){
      document.querySelector(".blog-arrow-left").classList.add('first-page-disabled');
    }
    else if(this.state.pageToLoad === (this.state.fullBlogsLength/5)) {
      document.querySelector(".blog-arrow-right").classList.add('last-page-disabled');
    }
    else if(this.state.pageToLoad === 2) {
      document.querySelector(".blog-arrow-left").classList.remove('first-page-disabled');
    }
    else if(this.state.pageToLoad === (this.state.fullBlogsLength/5)-1) {
      document.querySelector(".blog-arrow-right").classList.remove('last-page-disabled');
    }
  }

  render() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let blogArray;
    const blogs = this.state.blogs;
    if(blogs) {
      blogArray = blogs.map((blog) => {
        return (
          <BlogPost
           key={blog.id}
           image={blog.image}
           imageFull={blog.imagesfull}
           name={blog.name}
           email={blog.email}
           posts={blog.posts}
           blogTitle={blog.blogtitle}
           text={blog.text}
           fullText={blog.fulltext}
          />
        )
      })
    }
    return (
      <div className="blog-container">
        <div className="blog-center">
          {blogArray}
          <div className="nav-blog-container blog-is-loading">
            <i className="fas fa-angle-double-left blog-arrow-left" onClick={()=>this.handlePage('previous')} />
            <p>{this.state.pageToLoad}</p>
            <i className="fas fa-angle-double-right blog-arrow-right" onClick={()=>this.handlePage('next')} />
          </div>
        </div>
      </div>
    );
  } 
}

export default blogHolderComponent;