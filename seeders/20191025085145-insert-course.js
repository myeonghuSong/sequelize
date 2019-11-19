const fs = require('fs');
const path = require('path');
// const csv = require('fast-csv');
const csv = require('csvtojson')
const csvFilePath = path.join(__dirname+ './../public/courses.csv');
'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];

    const array = await csv().fromFile(csvFilePath);
    
    for(let i = 0; i < array.length; i++){
      let obj = {
        code: array[i].code,
        lecture: array[i].lecture,
        professor: array[i].professor,
        location: array[i].location,
        start_time: array[i].start_time,
        end_time: array[i].end_time,
        dayofweek: array[i].dayofweek,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      };
      datas.push(obj);
    };

    return queryInterface.bulkInsert('Courses', datas, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Courses', null, {});
  }
};
