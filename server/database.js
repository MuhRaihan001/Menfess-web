const mysql = require('mysql');
const config = require('../config.json');

const database = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

database.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.message);
    } else {
        console.log('Terhubung ke database: ' + database.config.database);
    }
});
module.exports = database