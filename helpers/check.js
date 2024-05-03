const User = require('../models/user');

const dbConnectionTest = (sequelize) => {
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((error) => {
            console.error('Unable to connect to the database:', error);
        });

}


module.exports = {
    dbConnectionTest,
}