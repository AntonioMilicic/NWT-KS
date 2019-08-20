import React from 'react';
import './App.css';
import Header from './HeaderForm/Header.js';
import Footer from './FooterForm/Footer.js';
import CardHolder from './CardForm/CardHolder.js';
import Home from './HomeForm/Home.js';
import SignUpForm from './SignUpLogInForm/SignUp.js';
import LogInForm from './SignUpLogInForm/LogIn.js';
import CartHolder from './CartForm/CartHolder.js';
import Blog from './BlogForm/BlogHolder.js';
import BlogPostFull from './BlogForm/BlogPostFull.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/blog" component = {Blog} />
        <Route path = "/category" component = {CardHolder} />
        <Route path = "/login" component = {LogInForm} />
        <Route path = "/signup" component = {SignUpForm} />
        <Route path = "/cart" component = {CartHolder} />
        <Route exact path = "/blog/blogpost" component = {BlogPostFull} /> 
        <Footer />
    </div>
  );
}

export default App;
