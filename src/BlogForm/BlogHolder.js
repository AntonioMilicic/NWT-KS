import React,{ Component } from 'react';
import BlogPost from './BlogPost.js';
import '../Static/Styles/css/blog.min.css';
import { fetchBlogs, fetchBlogLenght } from '../fetchFunctions.js';

class blogHolderComponent extends Component {
  constructor() {
    super ();
    this.state = {
      blogs: [],
      fullBlogsLength: "",
      pageToLoad: 1
    }
  }
  async componentDidMount () {
    const fullBlogs = await fetchBlogLenght();
    this.setState({
      fullBlogsLength: fullBlogs
    })
    const blogs = await fetchBlogs(1);
    this.setState({
      blogs: blogs
    });
    console.log(blogs);
  }
  async updateBlogPage() {
    const blogs = await fetchBlogs(this.state.pageToLoad);
    this.setState({
      blogs: blogs
    });
    console.log("novi blogovi", blogs);
  }
  async handlePage(command){
    if (command === "previous" && this.state.pageToLoad > 1) {
      await this.setState({
          pageToLoad: this.state.pageToLoad-1
        })
      this.updateBlogPage();
      }
    else if (command === "next" && this.state.pageToLoad < (this.state.fullBlogsLength/5)){
      await this.setState({
        pageToLoad: this.state.pageToLoad+1
      })
      this.updateBlogPage();
    }
  }

  render() {
    let blogArray;
    const blogs = this.state.blogs;
    if(blogs) {
      blogArray = blogs.map((blog) => {
        return (
          <BlogPost
            key={blog.blogTitle}
            image={blog.image}
            name={blog.name}
            email={blog.email}
            posts={blog.posts}
            blogTitle={blog.blogTitle}
            text={blog.text}
          />
        )
      })
    }
    return (
      <div className="blog-container">
        <div className="blog-center">
          {blogArray}
          <div className="nav-blog-container">
            <i className="fas fa-angle-double-left blog-arrow" onClick={()=>this.handlePage('previous')} />
            <p>{this.state.pageToLoad}</p>
            <i className="fas fa-angle-double-right blog-arrow" onClick={()=>this.handlePage('next')} />
          </div>
        </div>
      </div>
    );
  } 
}

export default blogHolderComponent;