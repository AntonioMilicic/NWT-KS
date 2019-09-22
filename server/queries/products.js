const pool = require('../dbcredential');

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', 
   (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getUserProducts = (request, response) => {
  const { username, userID } = request.body;

  pool.query('SELECT * FROM products WHERE user_id = $1 AND user_name = $2 ORDER BY id ASC',
   [userID, username],
   (error, results) => {
    if (error) {
      throw error
    }
    response.json(results.rows);
  });
}

const getProductCategories = (request, response) => {
  pool.query('SELECT DISTINCT category FROM products',
   (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const postNewUserProduct = (request, response) => {
  const { name, image, service, description, price, category, user_name, user_id } = request.body;

  pool.query(
   'INSERT INTO products (name, image, user_name, user_id, service, description, price, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
   [name, image, user_name, user_id, service, description, price, category],
   (error, results) => {
    if (error) {
      throw error
    }
    response.json({status: 'success'});
  });
}

const updateProduct = (request, response) => {
  const { name, image, service, description, price, category, user_name, user_id, id } = request.body;

  pool.query(
   'UPDATE products SET name = $1, image = $2, user_name = $3, user_id = $4, service = $5, description = $6, price = $7, category = $8 WHERE id = $9',
   [name, image, user_name, user_id, service, description, price, category, id],
   (error, results) => {
    if (error) {
      throw error
    }
    response.json({status: 'success'});
  });
}

const deleteUserProduct = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM products WHERE id = $1',
   [id],
   (error, results) => {
    if (error) {
      throw error
    }
    response.json({status: `delete`, deletedID: `${id}`});
  });
}

module.exports = {getProducts, getUserProducts, getProductCategories, postNewUserProduct, updateProduct, deleteUserProduct};