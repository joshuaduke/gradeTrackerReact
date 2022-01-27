import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
const app = express();
let log = console.log;

app.use(cors());
 
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "superheros"
})

db.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
})

app.get('/', (req, res)=>{
    db.query("SELECT * FROM Students", (err, rows)=>{
        if(err) throw err;
        log("Data: ", rows);
    })
})

app.listen(5000, ()=>{
    console.log("server is listening")
})