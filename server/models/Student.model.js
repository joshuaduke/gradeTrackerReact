import Sequelize from 'sequelize';
import db from '../config/database.js';

 const Student = db.define('student', {
    firstName:{
        type: Sequelize.STRING
    },
    lastName:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
 }, {timestamps: false});

 export default Student;