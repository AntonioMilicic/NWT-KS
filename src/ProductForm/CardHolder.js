import React, { Component } from 'react';
import '../Static/Styles/css/cards.min.css';

import Card from './Card.js';
import Category from './Category.js';

import { fetchCategories, fetchProducts } from '../ServerFunctions/getFunctions.js';
import { filterItems } from './CardHolder.Helpers';

class cardHolderComponent extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      items: [],
      selectedCategory: '',
      search: '',
      filteredItems: [],
      itemsInCart: []
    }
  }

  async componentDidMount() {
    const items = await fetchProducts();
    const categories = await fetchCategories();

    let categoriesArray = [];
    categories.forEach(function(category){
      categoriesArray.push(category.category);
    });

    const filteredItems = filterItems(items, this.state.selectedCategory, this.state.search);
    const cartItemIds = JSON.parse(sessionStorage.getItem( 'cartItems' ));

    if(!!this.state.itemsInCart && !!cartItemIds){
      this.setState({itemsInCart: cartItemIds});
    }
    this.setState({ categories: categoriesArray, items, filteredItems });
    
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    const filteredItems = filterItems(this.state.items, selectedCategory, this.state.search);
    this.setState({ selectedCategory, filteredItems });
  }

  handleFilterChange(event) {
    const search = event.target.value;
    const filteredItems = filterItems(this.state.items, this.state.selectedCategory, search);
    this.setState({ search, filteredItems });
  }
  
  async handleAddToCart(target) {
    await this.setState({
      itemsInCart: this.state.itemsInCart.concat(target)
    })
    sessionStorage.setItem('cartItems', JSON.stringify(this.state.itemsInCart));
  }


  render() {
    let selectionField;
    if(!!this.state.categories){
    selectionField = (this.state.categories)
      .map((selectCategory) => (
        <Category
         key={selectCategory}
         categoryname={selectCategory}
        />
      ));
    }
    
    let i = 1;
    const cards = this.state.filteredItems.map((selectedCategoryItem) => (
      <Card
       key={i++}
       id={selectedCategoryItem.id}
       image={selectedCategoryItem.image}
       name={selectedCategoryItem.name}
       service={selectedCategoryItem.service}
       price={selectedCategoryItem.price}
       description={selectedCategoryItem.description}
       userName={selectedCategoryItem.user_name}
       display="addToCart"
       clicked={(id)=>this.handleAddToCart(id)}
      />
    ));

    return (
      <main className="card-holder-container">
        <div className="category-search-container">
          <select 
           className="category-selector" 
           value={this.state.selectedCategory} 
           onChange={(e)=>this.handleCategoryChange(e)}
          >
            <option value="">All categories</option>
            {selectionField}
          </select>
          <input 
          className="input-field" 
          type="text" 
          placeholder="Search.."
          value={this.state.search} 
          onChange={(e)=>this.handleFilterChange(e)}
          />
        </div>
        <div className="card-container">   
          {cards}
        </div>
      </main>
    )
  }
}

export default cardHolderComponent; 