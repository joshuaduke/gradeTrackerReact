import Sequelize, { DataTypes } from 'sequelize';
import db from '../config/database.js';

 const Student = db.define('student', {
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
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