const mysql = require('mysql');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  console.log("params : " + params);
  return new Promise((resolve, reject) => {
  connection.query(sql,params, (error, results, params) => {
      if (error) {
        connection.end();
        reject(error);
      } else {
        connection.end();
        resolve(results);
      }
    });
  });
}

module.exports = {
  query
}