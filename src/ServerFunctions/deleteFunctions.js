import { API_URL } from '../urls';

export async function postDeleteProduct (id) {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }
  
    const response = await fetch(`${API_URL}/postDeleteProduct/${id}`, options);
    const responseData = await response.json();
    console.log("response:", responseData);
  
    return responseData;
  }