import React,{Component} from 'react';
import '../Static/Styles/css/cart.min.css';

import Cart from './Cart.js';
import { fetchProducts } from '../ServerFunctions/getFunctions.js';

class cartHolder extends Component {
  constructor() {
    super();
    this.state = {
      ids: [],
      items: [],
      selectedItems: []
    }
  }

  async componentDidMount() {
    const cartItemIds = JSON.parse(sessionStorage.getItem('cartItems'));
    
    if(!!cartItemIds) {
      const items = await fetchProducts();
      const selectedItems = await items.filter(item => cartItemIds.includes(parseInt(item.id)));

      this.setState({ids: cartItemIds, items: items, selectedItems: selectedItems});
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  async handleDeleteCart(id) {
    if(!!id) {
      const cartItemIds = JSON.parse(sessionStorage.getItem('cartItems'));
      const filterDeleted = await cartItemIds.filter(allButDeleted => allButDeleted !== id);
      
      sessionStorage.setItem('cartItems', JSON.stringify(filterDeleted));

      const selectedItems = await this.state.selectedItems.filter(item => filterDeleted.includes(parseInt(item.id)));
      this.setState({ids: filterDeleted, selectedItems});
    }
  }
  render() {
    let items = []
    if(this.state.selectedItems){
      items = this.state.selectedItems.map((item) => (
        <Cart
         key={item.id}
         id={item.id}
         image={item.image}
         name={item.name}
         service={item.service}
         price={item.price}
         description={item.description}
         delete={(id)=>this.handleDeleteCart(id)}
        />
      ))
    }
    return (
      <div className="cart-holder-container">
        <div className="cart-holder-center">
          {items}
        </div>
      </div>
    )
  }
}

export default cartHolder;