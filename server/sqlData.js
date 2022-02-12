const db = require('./config/db.config');


// Tasks
function insertTask(){
    let values = [
        ['Lab 1', '10', null, 16],
        ['Midterm', '40', null, 16],
        ['Final Exam', '50', null, 16],
    ]
    const insertIntoTable =
        'INSERT INTO Tasks (taskName, taskWeight, taskGrade, courseId) VALUES ?'
        db.query(insertIntoTable, [values], (err , result)=>{
            if(err) throw err;
            console.log('Tasks have been entered');
        })
}

function createTasksTable(){
    const createTasks = 
    `CREATE TABLE Tasks(
        taskId      INT PRIMARY KEY AUTO_INCREMENT,
        taskName    VARCHAR(45) NOT NULL,
        taskWeight  VARCHAR(5) NOT NULL,
        taskGrade   VARCHAR(5),
        courseId    INT NOT NULL,
        FOREIGN KEY (courseId) REFERENCES courses(courseId)
    )`

    db.query(createTasks, (err, result)=>{
        if(err) throw err;
        console.log('Tasks table has been created');
    })
}

// Courses
function dropTable(){
    db.query('DROP TABLE courses', (err, dropped)=>{
        if(err) throw err
        console.log('Courses table has been dropped');
    })
}

function createCoursestable(){
    const createCourses =
    `CREATE TABLE courses(
        courseId                INT PRIMARY KEY AUTO_INCREMENT,
        courseCode              VARCHAR(9)  NOT NULL,
        gpa                     VARCHAR(5),
        courseCredit            VARCHAR(4)  NOT NULL,
        courseGradePercentage   VARCHAR(5),  
        courseGradeLetter       VARCHAR(2),
        courseTargetGrade       VARCHAR(4),
        semesterId              INT         NOT NULL,
        id                      INT         NOT NULL,
        FOREIGN KEY (semesterId)    REFERENCES  semesters(semesterId),
        FOREIGN KEY (id)    REFERENCES  students(id)
    )`;

    db.query(createCourses, (err, result)=>{
        if(err) throw err;
        console.log('Courses table has beem created');
    })
}

function insertCourses(){
    let values = [
        ['WEB 322', null, '3', '80', null, null, 53, 18],
        ['BCI 433', '3.2', '3', '70', 'B', '80', 54, 18],
        ['PRJ 666', '4.0', '3', '80', 'A', '80', 54, 18],
        ['GAM 537', null, '3', null, null, null, 53, 18],
        ['MAP 526', null, '3', null, null, null, 53, 18],
    ]
    const insertIntoTable =
        'INSERT INTO courses (courseCode, gpa, courseCredit, courseGradePercentage, courseGradeLetter, courseTargetGrade, semesterId, id) VALUES ?'
        db.query(insertIntoTable, [values], (err , result)=>{
            if(err) throw err;
            console.log('Courses have been entered');
        })
}


// SEMESTERS
function createSemesterTable(){
    const createSemesters = 
    `CREATE TABLE semesters(
        semesterId      INT PRIMARY KEY AUTO_INCREMENT,
        semesterName    VARCHAR(45) NOT NULL,
        gpa             VARCHAR(5),
        active          BOOLEAN     NOT NULL,
        id              INT         NOT NULL,
        FOREIGN KEY (id)    REFERENCES  students(id)
    )`;

    db.query(createSemesters, (err, result)=>{
        if(err) throw err;
        console.log('Semesters Table has been created!');
    });
}

function insertSemesters(){
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
}

function retrieveAllSemesters(){
    let findSemesters = 
    `   SELECT * FROM Semesters 
    `

    db.query(findSemesters, (err, results)=>{
        if(err) throw err;
        if(results.length === 0 ){
            console.log('No semesters found')
        } else {
            console.log(results);
        } 
        
    })
}


module.exports = {
    createSemesterTable,
    insertSemesters,
    retrieveAllSemesters,
    createCoursestable,
    insertCourses,
    dropTable,
    createTasksTable,
    insertTask,
}