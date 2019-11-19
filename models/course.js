'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Course', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    lecture: {
      type: DataTypes.STRING
    },
    professor: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    start_time: {
      type: DataTypes.INTEGER
    },
    end_time: {
      type: DataTypes.INTEGER
    },
    dayofweek: {
      type: DataTypes.STRING
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
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