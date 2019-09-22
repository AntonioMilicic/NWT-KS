import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Static/Styles/css/cards.min.css';

import Card from './Card.js';
import { fetchUserProducts } from '../ServerFunctions/postFunctions.js';
import { postDeleteProduct } from '../ServerFunctions/deleteFunctions.js';

class userProductHolder extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      username: "",
      userID: ""
    }
  }

  async componentDidMount() {
    const username = JSON.parse(sessionStorage.getItem( 'username' ));
    const userID = JSON.parse(sessionStorage.getItem( 'userID' ));

    const items = await fetchUserProducts(username, userID); 
    this.setState({ items, username, userID });
    console.log(items);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  async removeProduct(id) {
    const deleteStatus = window.confirm("Confirm delete");
    if(deleteStatus) {
      const response = await postDeleteProduct(id);
      if(response.status === 'delete') {
        const items = await fetchUserProducts(this.state.username, this.state.userID); 
        this.setState({ items });
      }
    }
  }

  render() {
    let i = 1;
    let cards = [];
    if(!!this.state.items) {
      cards = this.state.items.map((item) => (
        <Card
         key={i++}
         id={item.id}
         image={item.image}
         name={item.name}
         service={item.service}
         price={item.price}
         description={item.description}
         userName={item.user_name}
         category={item.category}
         display="updateProduct"
         clickedRemove={(id)=>this.removeProduct(id)}
        />
      ));
    }

    return (
      <main className="card-holder-container">
        <NavLink to="/myProducts/createForm" className="create-card">
          <button type="button" className="create-card-button">Create Product</button>
        </NavLink>
        <div className="card-container">  
          {cards}
        </div>
      </main>
    )
  }
}

export default userProductHolder; 