const db = require('../config/db.config');

exports.home = (req, res) => {
    res.status(200).send("Home Content.");
};

exports.students = (req, res) => {

    res.status(200).send("students Content.");

};

/*   SEMESTERS   */

exports.semesters = (req, res) => {
    console.log(req.userId);
    // res.status(200).send("semester Content.");
    const getAllStudentSemesters = `
        SELECT * FROM semesters
        WHERE id = ${req.userId}
    `
    db.query(getAllStudentSemesters, (err, result)=>{
        if (err) throw err;
        res.send(result)
    })
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

/*  COURSES */

//GET Courses
exports.courses = (req, res) => {
    console.log('User ID', req.userId);

    const getAllStudentCourses = `
        SELECT * FROM courses
        WHERE id = ${req.userId}
        AND semesterId = ${req.params.semesterId}
    `

    db.query(getAllStudentCourses, (err, courses)=>{
        if (err) throw err;
        res.send(courses)
    })
    // res.status(200).send("Courses Content.");
};

//getOneCourse
exports.oneCourse = (req, res) =>{
    // console.log('User ID', req.userId);

    const getOneCourses = `
        SELECT * FROM courses
        WHERE courseId = ${req.params.courseId}
        AND semesterId = ${req.params.semesterId}
    `

    db.query(getOneCourses, (err, course)=>{
        if (err) throw err;
        res.send(course)
    })
}

exports.addCourse = (req, res) => {
    const newCourse = {
        code: req.body.courseCode,
        credit: req.body.credit,
        semesterId: req.body.semesterId,
        studentId: req.body.studentId
    }
    const newCourseSql = `
        INSERT INTO courses (courseCode, gpa, courseCredit, courseGradePercentage, courseGradeLetter, courseTargetGrade, semesterId, id)
        VALUES('${newCourse.code}', ${null}, ${newCourse.credit}, ${null}, ${null}, ${null}, ${newCourse.semesterId}, ${newCourse.studentId})
    `

    db.query(newCourseSql, (err, added)=>{
        if(err) throw err;
        console.log('Course has been added');
        res.send({
            message: 'Successfully added course'
        })
    })
}

exports.updateCourse = (req, res) => {
    const semesterId = req.params.semesterId;
    const courseId = req.params.id;

    const updatedName = {
        name: req.body.name
    }

    const updateQuery = 
    `UPDATE courses
        SET courseCode = '${updatedName.name}'
        WHERE courseId = ${courseId}
        AND semesterId = ${semesterId}
    `

    db.query(updateQuery, (err, updated)=>{
        if(err) throw err;
        console.log('Course has been updated ');
    })
    console.log(`Sid: ${semesterId}, Cid: ${courseId}`)
}

exports.targetGrade = (req, res) => {
    const courseId = req.params.courseId;

    const updatedGrade = {
        target: req.body.targetGrade
    }

    const updateQuery = 
    `UPDATE courses
        SET courseTargetGrade = '${updatedGrade.target}'
        WHERE courseId = ${courseId}
    `

    db.query(updateQuery, (err, updated)=>{
        if(err) throw err;
        console.log('Target Grade has been updated ');
    })
}

exports.deleteCourse = (req, res) =>{
    const semesterId = req.params.semesterId;
    const courseId = req.params.id;

    const removeCourse = `
        DELETE FROM courses
        WHERE semesterId = ${semesterId}
        AND   courseId = ${courseId}
    `
    db.query(removeCourse, (err, deleted) => {
        if(err) throw err;
        console.log('This course has been deleted');
        res.send({
            message: 'Row has been deleted'
        })
    })
}

/*  TASKS   */
exports.tasks = (req, res) => {
    console.log(req);
    console.log('User ID', req.userId);

    const getAllTasks = `
        SELECT * FROM Tasks
        WHERE courseId = '${req.params.courseId}';
    `

    db.query(getAllTasks, (err, tasks)=>{
        if (err){
            res.status(404).send({message: 'Tasks not found'})
        }
        res.send(tasks)
    })
    // res.status(200).send("Courses Content.");
}

exports.oneTask = (req, res) =>{
    console.log(req.params.taskId);
    const getOneTask = `
        SELECT * FROM Tasks
        WHERE taskId = ${req.params.taskId}
    `

    db.query(getOneTask, (err, result)=>{
        if(err) {
            res.send({message: 'Get one task error'})
        }

        console.log('Retrieved the task');
        res.send(result);
    })
}

exports.newTask = (req, res) => {
    const newTask = {
        name: req.body.name,
        weight: req.body.weight,
        courseId: req.params.courseId
    }

    const addTaskSql = `INSERT INTO Tasks (taskName, taskWeight, taskGrade, courseId)
                        VALUE ('${newTask.name}', '${newTask.weight}', ${null}, ${newTask.courseId})`
    
    db.query(addTaskSql, (err, result)=>{
        if(err) throw err;
        return res.send({message: 'Task successfully added'});    
    })
    
}

exports.addTasks = (req, res) =>{
    let data = [];

    req.body.forEach(element => {
        let taskValue = [element.name, `${element.weight}`, null, parseInt(req.params.courseId)]
        data.push(taskValue)
    });

    console.log(data);

    const insertSQL = `INSERT INTO Tasks (taskName, taskweight, taskGrade, courseId) VALUES ?`
    db.query(insertSQL, [data], (err, result)=>{
        if(err) throw err;
        console.log('Tasks have been added');
        return res.send({message: 'Tasks successfully added'});    
    })
}

exports.updateTask = (req, res) => {
    const taskId = req.params.taskId;

    const updatedTask = {
        name: req.body.name,
        weight: req.body.weight
    }

    const updateQuery = 
    `UPDATE Tasks
        SET taskName = '${updatedTask.name}', taskWeight = '${updatedTask.weight}'
        WHERE taskId = ${taskId}
    `

    db.query(updateQuery, (err, updated)=>{
        if(err) throw err;
        console.log('Task has been updated ');
        res.send({
            message: 'Task Has been updated'
        })
    })
    
}

exports.deleteTask = (req, res) =>{
    const id = req.params.taskId;
    console.log(id);
    const removeTask = `
        DELETE FROM Tasks
        WHERE taskId = ${id}
    `

    db.query(removeTask, (err, result)=>{
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