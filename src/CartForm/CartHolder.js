import React,{Component} from 'react';
import '../Static/Styles/css/cart.min.css';
import Cart from './Cart.js';

class cartHolder extends Component {
  render(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
    )
  }
}

export default cartHolder;