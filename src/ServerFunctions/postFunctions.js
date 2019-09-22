import { API_URL } from '../urls';

export async function fetchBlogs (previousStatePage, newStatePage) {
  const data = { previousStatePage, newStatePage };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${API_URL}/getBlogs`, options)
  const responseData = await response.json();
  console.log("res", responseData);

  return responseData;
}

export async function fetchUserProducts (username, userID) {
  const data = { username, userID };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${API_URL}/getUserProducts`, options)
  const responseData = await response.json();
  console.log("res", responseData);

  return responseData;
}

export async function postUserData(username, email, password) {
  const data = { username, email, password };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${API_URL}/postUserData`, options);
  const responseData = await response.json();
  console.log("response:", responseData);
  
  return responseData;
}

export async function postNewUserProduct(productName, 
  productImage, productService, productDescrition, 
  productPrice, productCategory, username, userID) {

  const data = {
    name: productName,
    image: productImage,
    service: productService, 
    description: productDescrition,
    price: productPrice,
    category: productCategory, 
    user_name: username, 
    user_id: userID 
  }
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(`${API_URL}/postNewUserProduct`, options);
  const responseData = await response.json();
  console.log("response:", responseData);

  return responseData;
}

export async function postCredentials (email, password) {
  const data = { email, password };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${API_URL}/credentials`, options);
  const responseData = await response.json();
  console.log("response:", responseData);

  return responseData;
}
