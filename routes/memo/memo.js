const express = require('express');
const router = express.Router();
const { Memo } = require('../../models');

router.get('/:code', async (req, res, next) => {
    try{
     const memoes = await Memo.findAll({ where: { coursecode: req.params.code } });
            res.json(memoes);
    } catch(error) {
            console.error(error);
            next(error);
    }
})

router.post('/',  (req, res, next) => {
     Memo.create({
        title: req.body.title,
        content: req.body.content,
        coursecode: req.body.coursecode,
    }).then((result) => {
        res.json({ result: 'ok' });
    }).catch((error) => {
        console.error(error);
        next(error);
    })
})

router.delete('/:id',  (req, res, next) => {

     Memo.destroy({
        where: { id: req.params.id }
    }).then((result) => {
        res.json({ result: 'ok' });
    }).catch((error) => {
        console.error(error);
        next(error);
    })
})


router.delete('/relate/:code/',  (req, res, next) => {

     Memo.destroy({
        where: { coursecode: req.params.code }
    }).then((result) => {
        res.json({ result: 'ok' });
    }).catch((error) => {
        console.error(error);
        next(error);
    })
})

module.exports = router;