var express = require('express');
var router = express.Router();
const { Course } = require('../../models');

router.get('/', (req, res, next) => {
  Course.findAll({
    attributes: ['code', 'lecture', 'professor', 'location', 'start_time', 'end_time', 'dayofweek'],
  })
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      console.error(error);
      next(error);
    })
});

router.get('/:code', async (req, res, next) => {
  try {
    const course = await Course.findOne({ where: { code: req.params.code } })
    res.json(course.dataValues);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.get('/enroll/:code', async (req, res, next) => {
  try {
    const courseList = await Course.findAll({ where: { used: '1' } });
    const enroll = await Course.findOne({ where: { code: req.params.code } });
    let arr = [];
    let overlap = courseList.length === 0? false: true;
    if (enroll.dataValues.used === true) {
      res.json({result:enroll.dataValues.used});
    }
    if (overlap) {
      arr = courseList.filter((val) => {
        for (let i = 0; i < enroll.dataValues.dayofweek.length; i++) {
          if (val.dataValues.dayofweek.includes(enroll.dataValues.dayofweek[i])) {
            return val;
          }
        }
      });
      overlap = arr.find(data => {
        return data.dataValues.start_time < enroll.dataValues.end_time && data.dataValues.end_time > enroll.dataValues.start_time? true:false;
      })
    }
    if (overlap) {
      res.json({result:'no'});
    } else {
      enroll.update({ used: '1' })
        .then(result => {
          res.json({result:result.dataValues});
        });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;
