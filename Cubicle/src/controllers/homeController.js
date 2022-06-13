const express = require('express');
const cubeService = require('..//services/cubeService.js');

const router = express.Router();

const home = async (req, res) => {
    let cubes = await cubeService.getAll();
    res.render('index', { cubes })
}

const about = (req, res) => {
    res.render('about')
}

router.get('/search', async (req, res) => {

    let { search, from, to } = req.query;

    let cubes = await cubeService.search(search, from, to);
    console.log(cubes);
    res.render('index', {
        title: "SEARCH",
        search,
        from,
        to,
        cubes
    })
})

router.get('/', home);
router.get('/about', about);

module.exports = router;