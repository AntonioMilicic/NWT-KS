const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const products = require('./queries/products');
const users = require('./queries/users');
const blogs = require('./queries/blogs');

const port = 4000;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.post('/postUserData', users.createUser);
app.post('/credentials', users.userExists);

app.get('/getProducts', products.getProducts);
app.get('/getCategories', products.getProductCategories);

app.post('/getUserProducts', products.getUserProducts);
app.post('/postNewUserProduct', products.postNewUserProduct);
app.put('/postUpdatedProduct', products.updateProduct);
app.delete('/postDeleteProduct/:id', products.deleteUserProduct);

app.post('/getBlogs', blogs.getBlogs);
app.get('/getBlogLength', blogs.getBlogLength);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
