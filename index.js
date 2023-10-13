const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: '192.168.3.89',
  user: 'GIMWORK',
  password: 'e8856d5f69a96dffbc28de27f94d2b65cb29828064be078f28513a86f1088649',
  database: 'WORDPRESS'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL database');

  // You can now perform database operations here

  // Don't forget to close the connection when you're done
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('MySQL connection closed');
    }
  });
});