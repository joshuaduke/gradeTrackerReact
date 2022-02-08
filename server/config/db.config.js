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

    // const createSemesters = 
    // `CREATE TABLE semesters(
    //     semesterId      INT PRIMARY KEY AUTO_INCREMENT,
    //     semesterName    VARCHAR(45) NOT NULL,
    //     gpa             VARCHAR(5),
    //     active          BOOLEAN     NOT NULL,
    //     id              INT         NOT NULL,
    //     FOREIGN KEY (id)    REFERENCES  students(id)
    // )`;

    // db.query(createSemesters, (err, result)=>{
    //     if(err) throw err;
    //     console.log('Semesters Table has been created!');
    // });
    let values = [
        ['Summer 2022', null,   false , 17],
        ['Winter 2022', null,   true ,  17],
        ['Fall 2021',   2.4,    false,  6],
        ['Summer 2019', 4.0,    false,  17]
    ]

    let insertIntoSemester = 'INSERT INTO Semesters (semesterName, gpa, active, id) VALUES ?'
    db.query(insertIntoSemester, [values], (err, result)=>{
        if(err) throw err;
        console.log('Semester has been entered')
    })
})

module.exports = db;