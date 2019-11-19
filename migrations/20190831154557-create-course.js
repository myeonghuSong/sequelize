'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      code: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      lecture: {
        type: Sequelize.STRING
      },
      professor: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.INTEGER
      },
      end_time: {
        type: Sequelize.INTEGER
      },
      dayofweek: {
        type: Sequelize.STRING
      },
      used: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};