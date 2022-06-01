const express = require('express');
const cubeService = require('../services/cubeService')

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create')
})

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.id);
    res.render('details', { ...cube })
}

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;
    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error.message).end();
    }

}

router.get('/:cubeId', cubeDetails);
router.post('/create', createCube);

module.exports = router;