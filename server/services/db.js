const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql) {
  console.log("db")
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql);
  connection.end();
  return results;
}

module.exports = {
  query
}