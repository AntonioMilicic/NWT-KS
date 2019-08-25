import React,{ Component } from 'react';
import styles from '../Static/Styles/css/header.min.css';
// eslint-disable-next-line
import  { BrowserRouter as Route, NavLink } from 'react-router-dom';

class headerComponent extends Component {

  handleHeaderStick = () => {
    const header = document.getElementById("header-container");
    const headerSticky = header.offsetTop;
    if (window.pageYOffset > headerSticky) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  }

  render(){
    window.onscroll = () => this.handleHeaderStick();
    return(
      <header className="header-container" id="header-container">
        <h1 className="header-title">SELL ME MORE</h1>
        <nav className="navigation-container">
          <div className="left-nav">
              <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/products">Products</NavLink>
          </div>
          <div className="right-nav">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </div>
          <div className="dropdown">
            <div className="dropdown-button">
              <img className="dropdown-image" src={'/images/Header/dropdownMenu.png'} alt="dropdown-img" />
            </div>
            <div className="dropdown-content">
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/cart">Cart</NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default headerComponent;
