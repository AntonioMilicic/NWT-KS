import { API_URL } from '../urls';

export async function postUpdatedProduct(productName, 
    productImage, productService, productDescrition, 
    productPrice, productCategory, username, userID, productID) {
  
    const data = {
      name: productName,
      image: productImage,
      service: productService, 
      description: productDescrition,
      price: productPrice,
      category: productCategory, 
      user_name: username, 
      user_id: userID,
      id: productID
    }
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  
    const response = await fetch(`${API_URL}/postUpdatedProduct`, options);
    const responseData = await response.json();
    console.log("response:", responseData);
  
    return responseData;
}
  