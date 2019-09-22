import React, { Component } from 'react';
import '../Static/Styles/css/c&uProduct.min.css';

import { postNewUserProduct } from '../ServerFunctions/postFunctions.js';
import { postUpdatedProduct } from '../ServerFunctions/updateFunctions.js';

class createProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productImage: "",
      productService: "",
      productDescription: "",
      productPrice: "",
      productCategory: "",
      username: "",
      userID: "",
      productID: "",
      displayUpdate: {},
      displayCreate: {}
    }
  }

  componentDidMount() {
    const username = JSON.parse(sessionStorage.getItem( 'username' ));
    const userID = JSON.parse(sessionStorage.getItem( 'userID' ));
    
    if(!!username && !!userID) {
      this.setState({
        username: username,
        userID: userID
      })
    }
    if(!!this.props.location.productID) {
      this.setState({
        productName: this.props.location.name,
        productImage: this.props.location.image,
        productService: this.props.location.service,
        productDescription: this.props.location.description,
        productPrice: this.props.location.price,
        productCategory: this.props.location.category,
        productID: this.props.location.productID,
        displayUpdate: {display: 'none'}
      })
    }
    else{
      this.setState({
        displayCreate: {display: 'none'}
      })
    }
  }

  handleFieldChange(event, eventType) {
    if(!!eventType) {
      if(eventType === "name") {
        this.setState({
          productName: event.target.value.substr(0, 30)
        });
      }
      else if(eventType === "image") {
        this.setState({
          productImage: event.target.value.substr(0, 30)
        });
      }
      else if(eventType === "service") {
        this.setState({
          productService: event.target.value.substr(0, 30)
        });
      }
      else if(eventType === "description") {
        this.setState({
          productDescription: event.target.value.substr(0, 400)
        });
      }
      else if(eventType === "price") {
        this.setState({
          productPrice: event.target.value.substr(0, 10)
        });
      }
      else if(eventType === "category") {
        this.setState({
          productCategory: event.target.value.substr(0, 30)
        });
      }
    }
  }

  handleClearing() {
    this.setState({
      productName: "",
      productImage: "",
      productService: "",
      productDescription: "",
      productPrice: "",
      productCategory: ""
    })
  }

  async handleProduct(event) {
    const pName = this.state.productName;
    const pImg = this.state.productImage;
    const pServ = this.state.productService;
    const pDesc = this.state.productDescription;
    const pPrice = this.state.productPrice;
    const pCat = this.state.productCategory;
    const user = this.state.username;
    const userID = this.state.userID;
    const pID = this.state.productID;

    if(!!pName && !!pImg && !!pServ && !!pDesc && !!pPrice && !!pCat && !!user && !!userID) {
      if(event === "create") {
        const newProductStatus = await postNewUserProduct(pName, pImg, pServ, pDesc, pPrice, pCat, user, userID);
        console.log(newProductStatus);
        setTimeout(()=>{this.props.history.push('/myProducts')}, 200);
      }
      else if(event === "update") {
        const updatedProductStatus = await postUpdatedProduct(pName, pImg, pServ, pDesc, pPrice, pCat, user, userID, pID);
        console.log(updatedProductStatus);
        setTimeout(()=>{this.props.history.push('/myProducts')}, 200);
      }
    }
    else {
      alert(`Please enter all fields before you click ${event}`);
    }
  }

  render() {
    return (
      <div className="create-product-form">
        <div className="product-container">
          <div className="input-product-field">
            <input 
            type="text"
            placeholder="Product Name"
            className="input-for-product"
            value={this.state.productName}
            onChange={(e)=>this.handleFieldChange(e, "name")}
            />
            <input 
            type="text"
            placeholder="Product Image"
            className="input-for-product"
            value={this.state.productImage}
            onChange={(e)=>this.handleFieldChange(e, "image")}
            />
            <input
            type="text"
            placeholder="Service type"
            className={"input-for-product"}
            value={this.state.productService}
            onChange={(e)=>this.handleFieldChange(e, "service")}
            />
            <textarea 
            type="text"
            placeholder="Product description"
            className="input-for-product description-field"
            value={this.state.productDescription}
            onChange={(e)=>this.handleFieldChange(e, "description")}
            />
            <input 
            type="text"
            placeholder="Product price"
            className="input-for-product"
            value={this.state.productPrice}
            onChange={(e)=>this.handleFieldChange(e, "price")}
            />
            <input 
            type="text"
            placeholder="Product category"
            className="input-for-product"
            value={this.state.productCategory}
            onChange={(e)=>this.handleFieldChange(e, "category")}
            />
          </div>
          <div className="btn-product-container">
            <button 
             type="button" 
             className="btn-product" 
             style={this.state.displayUpdate}
             onClick={()=>this.handleProduct("create")}
            >
            Create
            </button>
            <button 
             type="button" 
             className="btn-product"
             style={this.state.displayCreate}
             onClick={()=>this.handleProduct("update")}
            >
            Update
            </button>
            <button
             type="button"
             className="btn-product"
             onClick={()=>this.handleClearing()}
            >
            Clear
            </button>
          </div>
          <button
             type="button"
             className="btn-product"
             onClick={()=>window.history.back()}
            >
            Back
            </button>
        </div>
      </div>
    )
  }
}

export default createProductForm;
