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

//Post
exports.addSemester = (req, res)=> {

    //check for duplicate name
    const findSemester = `
        SELECT * FROM semesters 
        WHERE semesterName = '${req.body.semesterName}'
        AND id = ${req.body.id}
    `

    //add new semester
    const addNewSemester = `
        INSERT INTO semesters (semesterName, gpa, active, id)
        VALUES('${req.body.semesterName}', ${req.body.gpa}, ${req.body.active}, ${req.body.id})
    `;

    db.query(findSemester, (err, semester)=>{
        if(err) throw err;
        console.log(semester);
        if(semester.length > 0 ){
            return res.status(400).send({message: 'Semester name already exists'});
        } else {

            db.query(addNewSemester,(err, result)=>{
                if(err){
                    res.status(400).send({message: 'Error adding new semester'});
                }
        
                if(result){
                    res.send({message: 'Semester has been added'});
                    console.log('Semester has been added');
                    // console.log(result);
                 }
        
            })
        }
    })
};

//Update Semester name 
exports.updateSemester = (req, res)=>{
    const id = req.params.id;
    let updatedSemester;
    console.log(req.body)
    if(req.body.active === 0 || req.body.active == 1){
        updatedSemester = {
            active: req.body.active,
            id: req.params.id
        } 

        const defaultActive = `
        UPDATE semesters
        SET active = ${0}
        `
        db.query(defaultActive, (err, result)=>{
            if(err){
                console.log(err);
            } else {
                console.log('all fields set to inactive')
            } 
        })

        const mysqlUpdate = 
        `UPDATE semesters
        SET active = '${updatedSemester.active}'
        WHERE semesterId = ${updatedSemester.id}
        `
        db.query(mysqlUpdate, (err, result)=>{
            if(err) throw err;
            console.log(result);
            res.status(200).send({
                message: 'Semester has been updated'
            })
        })
    } else {
        updatedSemester = {
            id: req.params.id,
            name: req.body.name
        }
        const mysqlUpdate = 
        `UPDATE semesters
        SET semesterName = '${updatedSemester.name}'
        WHERE semesterId = ${updatedSemester.id}
        `

        db.query(mysqlUpdate, (err, result)=>{
            if(err) throw err;
            console.log(result);
            res.status(200).send({
                message: 'Semester has been updated'
            })
        })
    }
}

//Delete Semester
exports.deleteSemester = (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const removeSemester = `
        DELETE FROM semesters
        WHERE semesterId = ${id}
    `

    db.query(removeSemester, (err, result)=>{
        if (err){
            res.status(400).send({
                message:'Invalid id ??'
            })
        } else {
            console.log('Deleted');
            res.send({
                message: 'Row has been deleted'
            })
        }
    })

}