import { API_URL } from './urls.js';

export async function fetchBlogs (page) {
  return fetch(`${API_URL}/blogs?_page=${page}&_limit=5`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .catch (error => console.error(error));
}

export async function fetchBlogLenght () {
  return fetch(`${API_URL}/blogs`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .then (data => data.length)
    .catch (error => console.error(error));
}

export async function fetchCategories () {
  return fetch(`${API_URL}/category`)
    .then (response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then (data => data)
    .catch (error => console.error(error));
}