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


  app.get('/courses/:semesterId', authJwt.verifyToken, controller.courses);
  app.patch('/courses/:semesterId/:id', controller.updateCourse);
  app.delete('/courses/:semesterId/:id', controller.deleteCourse);

  app.post('/semesters', controller.addSemester);
  app.patch('/semesters/:id', controller.updateSemester);
  app.delete('/semesters/:id', controller.deleteSemester);
}

