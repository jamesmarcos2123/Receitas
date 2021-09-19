const express = require('express');
const router = express.Router();
const Receita = require('../model/receita')


const findById = async (req, res, next) => {
    req.receita = await Receita.findById(req.params.id);
    next();
};

router.get('/', async (req, res) => {
    res.json(await Receita.find())
})


router.get('/:id', async (req, res) => {
    try {
        res.json(await Receita.findById(req.params.id));
    } catch (err) {
        res.json({ error: 'Essa Receita nao existe' })
    }

})

router.post('/', async (req, res) => {
    res.json(await new Receita(req.body).save());
})
router.put('/:id', findById, async (req, res) => {
    res.json(await req.receita.set(req.body).save());
})

router.delete('/:id', findById, async (req, res) => {
    try {
        req.receita.remove();
        res.json({ mensagem: 'Receita removida com sucesso' });
    } catch (err) {
        res.json({ error: 'Essa Receita nao existe' })
    }
    
});

module.exports = router;