import express from 'express';
import Student from '../models/Student.model.js';
const router = express.Router();

router.get('/', (req, res) =>{
    Student.findAll()
        .then(students => {
            console.log(students);
            res.sendStatus(200);
        })
        .catch(err => {console.log(err)})
});

export default router;