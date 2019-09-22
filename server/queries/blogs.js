const pool = require('../dbcredential');

const getBlogs = (request, response) => {
  const { previousStatePage, newStatePage } = request.body;

  if(previousStatePage === newStatePage) {
    pool.query('SELECT * from blogs WHERE id BETWEEN 1 AND 5 ORDER BY id ASC',
     (error, results) => {
      if (error) {
        throw error
      }
      response.json(results.rows);
    });
  }

  else if(previousStatePage > newStatePage) {
    const firstNumber = (((newStatePage-1)*5)+1);
    const secondNumber = ((newStatePage*5));
    pool.query('SELECT * from blogs WHERE id BETWEEN $1 AND $2 ORDER BY id ASC',
     [firstNumber, secondNumber],
     (error, results) => {
      if (error) {
        throw error
      }
      response.json(results.rows);
    });
  }

  else if(previousStatePage < newStatePage) {
    const firstNumber = ((previousStatePage*5)+1);
    const secondNumber = ((newStatePage*5));
    pool.query('SELECT * FROM blogs WHERE id BETWEEN $1 AND $2 ORDER BY id ASC',
     [firstNumber, secondNumber],
     (error, results) => {
      if (error) {
        throw error
      }
      response.json(results.rows);
    });
  }
}

const getBlogLength = (request, response) => {
  pool.query('SELECT MAX(id) FROM blogs',
   (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  });
}

module.exports = {getBlogs, getBlogLength};