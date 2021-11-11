const mysql = require('mysql2')

const conexao = mysql.createPool({

  host: 'localhost',
  user: '',
  password: '',
  port: 3306,
  database: 'portfolio'
  
})

module.exports = conexao

