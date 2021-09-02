const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_data',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(`Connection failed ${err}`);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
