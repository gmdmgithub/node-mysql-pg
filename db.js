const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'simple'
});

connection.connect((err) => {
    if (err){
        console.log(err);
        throw error;
    }
    console.log('DB Connected');
});

module.exports = {
    connection
} 