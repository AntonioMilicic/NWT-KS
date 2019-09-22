import React from 'react';
import { NavLink } from 'react-router-dom';

const card = (props) => {
  let styleDisplayAdd;
  let styleDisplayUpdate;

  if(props.display === "addToCart") {
    styleDisplayUpdate = {
      display: 'none'
    }
  }
  else if(props.display === "updateProduct") {
    styleDisplayAdd = {
      display: 'none'
    }
  }

  return (
    <li className="card-item">
      <i 
       className="fa fa-times remove-user-product" 
       style={styleDisplayUpdate} 
       onClick={()=> props.clickedRemove(props.id)}
       aria-hidden="true"
      />

      <img src={props.image} alt="cardImg" />
      <div>
        <h2>{props.name}</h2>
        <p><b>Service:</b> {props.service}</p>
        <p><b>Price:</b> {props.price}</p>
      </div>
      <button className="addToCart-button" style={styleDisplayAdd} onClick={()=> props.clicked(props.id)}>AddToCart</button>
        <NavLink 
         className="update-link" 
         to ={{
          pathname: '/myProducts/updateForm',
          productID: props.id,
          image: props.image,
          name: props.name,
          service: props.service,
          price: props.price,
          category: props.category,
          description: props.description
        }}>
          <button className="addToCart-button" style={styleDisplayUpdate}>Update</button>
        </NavLink>
    </li>
  )
}

export default card;
