import mysql from 'mysql2';

// config for the db
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nam2442003",
  database: "pc_shop",
  multipleStatements: true,
});

export default connection;