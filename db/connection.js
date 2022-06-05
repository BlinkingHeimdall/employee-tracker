const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Buechu41!1089',
        database: 'employee_tracker'
    },
    console.log('Connected to the database.')
);

module.exports = db;