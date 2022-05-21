const express = require('express');
const cubeService = require('..//services/cubeService.js');

const router = express.Router();

router.get('/', (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/search', (req, res) => {

    let { search, from, to } = req.query;

    let cubes = cubeService.search(search, from, to);

    res.render('index', {
        title: "SEARCH",
        search,
        from,
        to,
        cubes
    })
})

module.exports = router;