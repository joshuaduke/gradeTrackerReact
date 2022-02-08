const { verifySignUp } = require('../middleware/');
const controller = require('../controllers/auth.controller');

module.exports = (app) => {
    app.use((req, res, next)=>{
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
          );
          next();
    });

    app.post('/auth/register', verifySignUp.checkDuplicate , controller.register);
    app.post('/auth/login',  controller.logIn);
    app.post('/auth/logout', controller.logOut);
};