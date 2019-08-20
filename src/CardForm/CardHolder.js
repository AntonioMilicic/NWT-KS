import React, { Component } from 'react';
import Card from './Card.js';
import Category from './Category.js';
import '../Static/Styles/css/cards.min.css';
import { fetchCategories } from '../fetchFunctions.js';
import { filterItems } from './CardHolder.Helpers';

class cardHolderComponent extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
      selectedCategory: '',
      search: '',
      filteredItems: []
    }
  };

  async componentDidMount() {
    const categories = await fetchCategories();
    const filteredItems = filterItems(categories, this.state.selectedCategory, this.state.search);
    this.setState({ categories, filteredItems });
  };

  handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    const filteredItems = filterItems(this.state.categories, selectedCategory, this.state.search);
    this.setState({ selectedCategory, filteredItems });
  }

  handleFilterChange(event) {
    const search = event.target.value;
    const filteredItems = filterItems(this.state.categories, this.state.selectedCategory, search);
    this.setState({ search, filteredItems });
  }

  render() {
    const selectionField = Object.keys(this.state.categories)
      .map((selectCategory) => (
        <Category
          key={selectCategory}
          categoryname={selectCategory}
        />
      ));
    let i = 0;
    const cards = this.state.filteredItems.map((selectedCategoryItem) => (
      <Card
        key={i++}
        image={selectedCategoryItem.image}
        name={selectedCategoryItem.name}
        service={selectedCategoryItem.service}
        price={selectedCategoryItem.price}
      />
    ));

    return(
      <main className="card-holder-container">
        <div className="category-search-container">
          <select 
          className="category-selector" 
          value={this.state.selectedCategory} 
          onChange={(e)=>this.handleCategoryChange(e)}
          >
            <option value="">Select category:</option>
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
        <div className="nav-card-bar">
          <i className="fa fa-angle-double-left arrow-card-next" />
          <a className="num-card" href="1">1</a>
          <a className="num-card" href="1">2</a>
          <a className="num-card" href="1">3</a>
          <i className="fa fa-angle-double-right arrow-card-next" />
        </div>
      </main>
    );
  }
}

export default cardHolderComponent; 