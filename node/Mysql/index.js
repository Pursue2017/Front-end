var mysql = require('mysql');

//mysql8.0修改加密方式，https://blog.csdn.net/airdark_long/article/details/82588064
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node'
});

connection.connect();

connection.query('SELECT * FROM user', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();