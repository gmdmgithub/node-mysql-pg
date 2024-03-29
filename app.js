const express = require('express');
const path = require('path');
const connection = require('./db')


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
});

//rout for get a specific row (id)
app.get('/getrecord/:id', (req, res) => {

    const sql = `SELECT * FROM users where id=${req.params.id}`;
    connection.query(sql, (err, results) => {
        if (err) {
            res.send(error);
            return;
        }
        console.log('Search for id: ', req.params.id);
        res.send(results);
    });

});

//create server and listen on port
app.listen(process.env.HTTP_PORT, () => {
    console.log(`Server started at port ${process.env.HTTP_PORT}`);

});