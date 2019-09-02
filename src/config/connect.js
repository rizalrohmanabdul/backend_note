require('dotenv').config()
const mysql = require('mysql') 
const conn = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'WZsViRL48U',
  password: 'lw9uRuX01J',
  database: 'WZsViRL48U'
})

conn.connect((err) => {
  if (err) console.log(`Eror From Connecton in file conn.js : ${err}`)
})

module.exports = conn