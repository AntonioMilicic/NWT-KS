import React from 'react';
import styles from '../Static/Styles/css/header.min.css';
// eslint-disable-next-line
import  { BrowserRouter as Route, NavLink } from 'react-router-dom';

const headerComponent = () => {
  return(
    <header className="header-container" id="header-container">
      <h1 className="header-title">SELL ME MORE</h1>
      <nav className="navigation-container">
        <div className="left-nav">
            <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/category">Category</NavLink>
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

export default headerComponent;
