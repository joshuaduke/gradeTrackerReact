const db = require('../config/db.config');


checkDuplicate = async (req, res, next)=>{
    let findStudent = `SELECT * FROM Students
    WHERE email = '${req.body.email}'`

    try{
        let user = await db.query(findStudent, (err, student)=>{
            if (err) throw err;
            if(student.length > 0){
                return res.status(400).send({
                    message: 'Email is already in use'
                });
            }
            next();
        })

    } catch (err){
        return res.status(500).send({
            message: 'Cannot validate email address'
        })
    }
}

const verifySignUp = {
    checkDuplicate
}

module.exports = verifySignUp;