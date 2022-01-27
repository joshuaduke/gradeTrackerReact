import Sequelize from 'sequelize';

const db = new Sequelize('Testing', process.env.DB_USER, process.env.DB_PASS,
{
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

export default db;