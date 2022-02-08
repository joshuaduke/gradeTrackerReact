const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//save user to the database, check if email already exists
exports.register = async (req, res)=>{
    try {
        const createStudent = `
            INSERT INTO students (firstName, lastName, email, password)
            VALUES('${req.body.firstName}','${req.body.lastName}','${req.body.email}','${bcrypt.hashSync(req.body.password, 10)}')`;

        const user = await db.query(createStudent, (err, result)=>{
             if(err) throw err;

             if(result){
                res.send({message: 'Student has been created'});
                console.log('Student has been created');
             }
        });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

//check username and compare password and validate user, create jwt 
exports.logIn = async (req, res)=>{
    try {
        console.log(req.body)
        const findStudent = `
            SELECT * FROM Students
            WHERE email = '${req.body.email}'
        `;
        await db.query(findStudent, (err, foundStudent)=>{
            if(err) throw err;
            console.log(foundStudent);
            if(foundStudent.length === 0){
                return res.status(404).send({
                    message: 'Student not found'
                });
            }
            
            const passwordIsValid = bcrypt.compareSync(req.body.password, foundStudent[0].password); 
            if(!passwordIsValid){
                return res.status(401).send({
                    message: 'Invalid Password'
                })
            }

            const token = jwt.sign(
                {
                    id: foundStudent[0].id,
                    email: foundStudent[0].email
                }, process.env.JWT_SECRET,
                { expiresIn: 86400 })


            req.session.token = token;
            // return res.status(200).send({
            //     id: result[0].id,
            //     firstName: result[0].firstName,
            //     lastName: result[0].lastName,
            //     email: result[0].email
            // })
            return res.json({status: 'ok', student: token});
        })
    } catch (err) {
        res.status(500).send({message: error.message});
    }
}

//end session, kill db connection destroy jwt
exports.logOut = async (req, res)=>{
    try {
        req.session = null;
        return res.status(200).send({
            message: 'You have been logged out'
        })
        // return res.redirect('/login');
    } catch (error) {
        this.next(err);
    }
}

