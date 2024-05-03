const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const User = require('./user');


const Note = sequelize.define('Note', {
    title: {
        type:DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type:DataTypes.TEXT,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    isLocked: {
        type: DataTypes.BOOLEAN, 
        default: false,
    },
    isPinned: {
        type: DataTypes.BOOLEAN, 
        default: false,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    recycledAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    timestamps: true,
    paranoid: true
})

Note.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = Note;