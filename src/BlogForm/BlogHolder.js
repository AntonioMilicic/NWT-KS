import React,{ Component } from 'react';
import BlogPost, {} from './BlogPost.js';
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
    await this.updateBlogPage();
    document.querySelector(".nav-blog-container").classList.toggle('blog-is-loading');
  }

  async updateBlogPage(){
    const blogs = await fetchBlogs(this.state.pageToLoad);
    this.setState({
      blogs: blogs
    });
    this.handleArrowDisplay();
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

  handleArrowDisplay(){
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

  render(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let blogArray;
    const blogs = this.state.blogs;
    if(blogs) {
      blogArray = blogs.map((blog) => {
        return (
          <BlogPost
            key={blog.blogTitle}
            image={blog.image}
            imageFull={blog.imageFull}
            name={blog.name}
            email={blog.email}
            posts={blog.posts}
            blogTitle={blog.blogTitle}
            text={blog.text}
            fullText={blog.fullText}
          />
        )
      })
    }
    return (
      <div className="blog-container">
        <div className="blog-center">
          {blogArray}
          <div className="nav-blog-container blog-is-loading">
            <i className="fas fa-angle-double-left blog-arrow-left" onClick={()=>{this.handlePage('previous')}} />
            <p>{this.state.pageToLoad}</p>
            <i className="fas fa-angle-double-right blog-arrow-right" onClick={()=>{this.handlePage('next')}} />
          </div>
        </div>
      </div>
    );
  } 
}

export default blogHolderComponent;