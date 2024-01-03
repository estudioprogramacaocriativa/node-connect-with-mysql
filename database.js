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

connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

connection.end();