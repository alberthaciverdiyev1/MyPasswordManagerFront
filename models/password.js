const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const User = require('./user');

const Password = sequelize.define('Password', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        order:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        recycledIt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deletedIt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        timestamps: true,
        paranoid: true
    });

Password.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = Password;
