const mysql = require('mysql');
const dotenv = require('dotenv')
//set the .env file configuration
dotenv.config({
    path: '.env'
});

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME
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