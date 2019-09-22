const pool = require('../dbcredential');

const createUser = (request, response) => {
  const { username, email, password } = request.body;

  pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
   [username, email, password],
   (error, results) => {
    if (error) {
      throw error
    }
    response.json({status: 'success'});
  });
}

const userExists = (request, response) => {
  const { email, password } = request.body;

  pool.query('SELECT * FROM users WHERE email = $1 AND password = $2',
   [email, password],
   (error, results) => {
    if (error) {
      throw error
    }
    if(!!results.rows[0]) {
      response.json({
        status: 'success',
        userID: results.rows[0].id,
        username: results.rows[0].name
      });
    }
    else {
      response.json({
        status: 'error'
      })
    }
  });
}

module.exports = {createUser, userExists};