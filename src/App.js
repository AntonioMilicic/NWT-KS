import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './HeaderForm/Header.js';
import ProductForm from './ProductForm/CardHolder.js';
import userProductForm from './ProductForm/UserProducts.js';
import createProductForm from './ProductForm/C&UProduct';
import Home from './HomeForm/Home.js';
import Blog from './BlogForm/BlogHolder.js';
import BlogPostFull from './BlogForm/BlogPostFull.js';
import LogInForm from './CredentialForm/LogIn.js';
import LogOutForm from './CredentialForm/LogOut.js';
import SignUpForm from './CredentialForm/SignUp.js';
import CartHolder from './CartForm/CartHolder.js';
import Footer from './FooterForm/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/blog" component = {Blog} />
      <Route path = "/products" component = {ProductForm} />
      <Route exact path = "/myProducts" component = {userProductForm} />
      <Route exact path = "/myProducts/createForm" component = {createProductForm} />
      <Route exact path = "/myProducts/updateForm" component = {createProductForm} />
      <Route path = "/login" component = {LogInForm} />
      <Route path = "/logout" component = {LogOutForm} />
      <Route path = "/signup" component = {SignUpForm} />
      <Route path = "/cart" component = {CartHolder} />
      <Route exact path = "/blog/blogpost" component = {BlogPostFull} /> 
      <Footer />
    </div>
  )
}

export default App;
