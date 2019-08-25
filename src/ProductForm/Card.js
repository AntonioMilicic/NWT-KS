import React from 'react';

const card = (props) => {
  return (
    <li className="card-item">
      <img src={props.image} alt="cardImg" />
      <div>
        <h2>{props.name}</h2>
        <p><b>Service:</b> {props.service}</p>
        <p><b>Price:</b> {props.price}</p>
      </div>
      <button className="addToCart-button">AddToCart</button>
    </li>
  )
}

export default card;