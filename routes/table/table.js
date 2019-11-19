const express= require('express');
const router = express.Router();
const { Course } = require('../../models');
router.get('/', async (req,res, next) => {
    try {
      const course = await Course.findAll({where:{used:'1'}});
      res.json(course);
    } catch (error) {
      console.error(error);
      next(error);
    }
})

router.get('/:code', async (req, res, next) => {
  try{
    const course = await Course.findOne({ where: {code: req.params.code } })
    // console.log(course.dataValues);
    res.json(course.dataValues);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.put('/:code', async (req, res, next) => {
  try{
      const course = await Course.findOne({where: {code: req.params.code }});
        course.update({used: '0' })
        .then(result => {
          // console.log(result.dataValues);
          res.json(result.dataValues);
        })
        .catch(next);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;