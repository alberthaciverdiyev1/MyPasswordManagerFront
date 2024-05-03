const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    // dialect: process.env.DIALECT,
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'MyPasswordManager'

});
module.exports = sequelize;


