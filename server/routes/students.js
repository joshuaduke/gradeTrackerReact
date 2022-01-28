import express from 'express';
import Student from '../models/Student.model.js';
const router = express.Router();

//get all students
router.get('/', (req, res) =>{
    Student.findAll()
        .then(students => {
            console.log(students);
            res.sendStatus(200);
        })
        .catch(err => {console.log(err)})
});

router.get('/add', (req, res)=>{
    const data = {
        firstName: "Joshua",
        lastName: "Duke",
        email: "joshua@test.com"
    }

    let { firstName, lastName, email  } = data;

    //insert into table
    Student.create({
        firstName,
        lastName,
        email
    })
        .then(student => res.redirect('/students'))
        .catch(err => { console.log(err)})

})
//add a student


export default router;