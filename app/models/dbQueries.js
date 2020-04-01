const { pool } = require('./dbConnection.js')

function retrieveProducts () {
  let query = {
    text: 'SELECT (descr, price, img_url) from products'
  }

  return new Promise((resolve, reject) => {
    pool
      .query(query)
      .then(res => {
        let itemArray = []
        res.rows.forEach((line) => {
          let detailsArray = parseTupleStringToArray(line.row)
          let item = {
            descr: detailsArray[0],
            price: detailsArray[1],
            imgUrl: detailsArray[2]
          }
          itemArray.push(item)
        })
        resolve(itemArray)
      })
      .catch(err => {
        reject(new Error('Error executing query', err.stack))
      })
  })
}

function parseTupleStringToArray (tupleString) {
  // Remove backets
  tupleString = tupleString.substring(1, tupleString.length - 1)
  let a = tupleString.split(',')
  return a
}

module.exports = { retrieveProducts }
