var mysql = require('mysql');

var connection = mysql.createConnection({ 
                  user: 'root',
                  password: '',
                  database: 'chat'
});

connection.connect();

module.exports = connection;



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
 
// var client = mysql.createClient({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
// });

// .createConnection

// client.query('CREATE DATABASE testDB');
// client.query('USE testDB');
// client.query('CREATE TABLE testTable ' +
//                (' message VARCHAR(150), ' +
//                'id INT(11) AUTO_INCREMENT, ') )
//                // ETC...
// );
