const express = require('express');
const cubeService = require('../services/cubeService.js')

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/:id', (req, res) => {
    let cube = cubeService.getOne(req.params.id);
    console.log(cube);
    res.render('details', { ...cube })
})

router.post('/create', (req, res) => {
    let cube = req.body;
    let { name, description, imageUrl, difficulty } = cube;
    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/');
})

module.exports = router;