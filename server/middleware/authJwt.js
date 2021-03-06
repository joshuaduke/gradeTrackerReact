const jwt = require('jsonwebtoken');
const db = require('../config/db.config');

verifyToken = (req, res, next) => {
    // let token = req.session.token;
    let token =req.headers.authorization;
    console.log(req.headers.authorization);
    if(!token){
        return res.status(403).send({
            message: 'No token provided'
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).send({
                //should redirect to login page
                message: 'Unathorized! or Expired!',
            });
        }
        req.userId = decoded.id;
        next();
    })
}

const authJwt = {
    verifyToken
}

module.exports = authJwt;