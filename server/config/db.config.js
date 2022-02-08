require('dotenv').config()
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});

db.connect((err)=>{
    if(err) throw err;
    console.log('DB connected successfully');
})

module.exports = db;