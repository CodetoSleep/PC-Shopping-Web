import mysql from 'mysql2';

// config for the db
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "22102003",
  database: "laptop",
  multipleStatements: true,
});

export default connection;