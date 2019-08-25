import React from 'react';

const cart = () => {
  return (
    <li className="cart-container">
      <div className="cart-user">
        <img className="cart-user-img" alt="cart-cards" src={'/images/Blogs/User/userImage1.png'} />
        <ul className="cart-user-info">
          <li><b>Name:</b> Neko Ime </li>
          <li><b>Email:</b> Nesto </li>
          <li><b>Profession:</b> Nesto</li>
        </ul>
      </div>
      <div className="cart-description">
        <h1>Description</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Felis donec et odio pellentesque diam volutpat commodo sed egestas.
        </p>
      </div>
      <div className="cart-controler">
        <input className="input-field-cart" type="number" min="1" placeholder="1" />
        <i className="fa fa-trash remove-from-cart"></i>
      </div>
    </li>
  )
}

export default cart;