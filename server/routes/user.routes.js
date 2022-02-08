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
  app.get('/students', authJwt.verifyToken, controller.home);
  app.get('/semesters', authJwt.verifyToken, controller.home);
  app.get('/class', authJwt.verifyToken, controller.home);
}

