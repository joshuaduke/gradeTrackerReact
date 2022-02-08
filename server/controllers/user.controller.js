const db = require('../config/db.config');

exports.home = (req, res) => {
    res.status(200).send("Home Content.");
};

exports.students = (req, res) => {

    res.status(200).send("students Content.");

};

exports.semesters = (req, res) => {
    console.log(req.userId);
    // res.status(200).send("semester Content.");
    const getAllSemesters = `
        SELECT * FROM semesters
        WHERE id = ${req.userId}
    `
    db.query(getAllSemesters, (err, result)=>{
        if (err) throw err;
        res.send(result)
    })
};

exports.class = (req, res) => {
    res.status(200).send("Class Content.");
};