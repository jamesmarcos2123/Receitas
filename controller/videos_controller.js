const express = require('express');
const router = express.Router();
const Video = require('../model/video')


const findById = async (req, res, next) => {
    req.video = await Video.findById(req.params.id);
    next();
};

router.get('/', async (req, res) => {
    res.json(await Video.find())
})


router.get('/:id', async (req, res) => {
    try {
        res.json(await Video.findById(req.params.id));
    } catch (err) {
        res.json({ error: 'Esse Video nao existe' })
    }

})

router.post('/', async (req, res) => {
    res.json(await new Video(req.body).save());
})

router.put('/:id', findById, async (req, res) => {
    res.json(await req.video.set(req.body).save());
})

router.delete('/:id', findById, async (req, res) => {
    try {
        req.video.remove();
        res.json({ mensagem: 'Video removida com sucesso' });
    } catch (err) {
        res.json({ error: 'Esse Video nao existe' })
    }
    
});

module.exports = router;