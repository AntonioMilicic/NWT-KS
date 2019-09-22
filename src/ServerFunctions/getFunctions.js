import { API_URL } from '../urls.js';

export async function fetchBlogLenght () {
  return fetch(`${API_URL}/getBlogLength`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .catch (error => console.error(error));
}

export async function fetchCategories () {
  return fetch(`${API_URL}/getCategories`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .catch (error => console.error(error));
}

export async function fetchProducts () {
  return fetch(`${API_URL}/getProducts`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .catch (error => console.error(error));
}
