import React from 'react';

const cart = (props) => {
  return (
    <li className="cart-container">
      <div className="cart-user">
        <img className="cart-user-img" alt="cart-cards" src={props.image} />
        <ul className="cart-user-info">
          <li><b>Name:</b> {props.name} </li>
          <li><b>Profession:</b> {props.service}</li>
          <li><b>Price:</b> {props.price}</li>
        </ul>
      </div>
      <div className="cart-description">
        <h1>Description</h1>
        <p>
          {props.description}
        </p>
      </div>
      <div className="cart-controler">
        {/* input trenutno ne radi nista */}
        <input className="input-field-cart" type="number" min="1" placeholder="1" />
        <i className="fa fa-trash remove-from-cart" onClick={()=> props.delete(props.id)}></i>
      </div>
    </li>
  )
}

export default cart;