const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_db',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connectiong to MySQL database:', error);
  } else {
    console.log("You're successfully connected to MySQL database.");
  }
});

connection.end();