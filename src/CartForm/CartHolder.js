import React from 'react';
import '../Static/Styles/css/cart.min.css';
import Cart from './Cart.js';

const cartHolder = () => {
  return (
    <div className="cart-holder-container">
      <div className="cart-holder-center">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}

export default cartHolder;