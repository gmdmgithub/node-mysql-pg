const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'simple'
});

connection.connect((err) => {
    if (err) throw error;
    console.log('DB Connected');
});

//create app
const app = express();


//lest add some rout
// - get list
app.get('/getlist', (req, res) => {
    connection.query('SELECT * FROM `users` where STATUS = TRUE',
        function (error, results, fields) {
            if (error) {
                res.send(error);
                return;
            }
            results.forEach(element => {
                console.log('Results are: ', element);
            });
            res.send(results);
        });
});
//insert a new row to the database
app.get('/insert', (req, res) => {
    //
    let post = {
        name: "Alan",
        surname: "Cook",
        password: "temporary"
    };
    let sql = "insert into users set ?";
    let query = connection.query(sql, post, (err, result) => {
        if (err) {
            res.send(error);
            return;
        }
        console.log('Post added: ', result);
        res.send(result);
    });
    //connection.

});


//rout for get a specific row (id)
app.get('/getrecord/:id', (req, res) => {

    let sql = `SELECT * FROM users where id=${req.params.id}`;
    let query = connection.query(sql, (err, results) => {

        if (err) {
            res.send(error);
            return;
        }

        console.log('Search for id: ', results);
        res.send(results);

    });


});


//connection.end();

//create server
app.listen('3000', () => {
    console.log('starver started');

});