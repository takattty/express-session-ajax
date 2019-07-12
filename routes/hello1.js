const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const mysql_setting = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydata'
};

router.get('/', (req, res, next) => {
    const connection = mysql.createConnection(mysql_setting);

    connection.connect();

    connection.query('SELECT * FROM mydata',
        function (error, results, fields) {
            if (error == null) {
                let data = {title:'mysql', content:results};
                res.render('hello1', data)
            }
    });

    connection.end();
})

module.exports = router;