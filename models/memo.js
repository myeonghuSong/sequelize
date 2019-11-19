'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Memo', {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        coursecode: {
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};