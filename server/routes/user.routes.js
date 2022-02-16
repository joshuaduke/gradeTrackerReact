const {authJwt} = require('../middleware/index');
const controller = require('../controllers/user.controller');

module.exports = (app)=>{
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
    });

  app.get('/home', controller.home);
  app.get('/students', authJwt.verifyToken, controller.students);
  app.get('/semesters', authJwt.verifyToken, controller.semesters);


  app.get('/:semesterId', authJwt.verifyToken, controller.courses);
  app.get('/courses/:semesterId/:courseId', authJwt.verifyToken, controller.oneCourse);

  app.get('/courses/:courseId', authJwt.verifyToken, controller.tasks);
  app.get('/task/:taskId', authJwt.verifyToken, controller.oneTask)
  app.post('/courses/:courseId', controller.newTask);
  app.post('/courses/many/:courseId', controller.addTasks);
  app.patch('/task/:taskId', controller.updateTask)
  app.delete('/courses/:taskId', controller.deleteTask);

  
  app.post('/courses/addCourse/:semesterId', controller.addCourse);
  app.patch('/courses/:semesterId/:id', controller.updateCourse);
  app.patch('/updateTargetGrade/:courseId', controller.targetGrade);
  app.delete('/courses/:semesterId/:id', controller.deleteCourse);

  app.post('/semesters', controller.addSemester);
  app.patch('/semesters/:id', controller.updateSemester);
  app.delete('/semesters/:id', controller.deleteSemester);
}

