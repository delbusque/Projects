const express = require('express');
const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('../controllers/cubeAccessoryController');
const accessoryService = require('../services/accessoryService');


const router = express.Router();

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/details', { ...cube })
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

const editCube = async (req, res) => {

    let cube = await cubeService.edit(req.params.cubeId, req.body);

    if (!cube) {
        return res.redirect(`/404`);
    }

    res.redirect(`/cube/${req.params.cubeId}`)
}

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.get('/:cubeId/edit', async (req, res) => {

    let cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/edit', { cube });
})

router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.post('/:cubeId/edit', editCube);
router.use('/:cubeId/accessory/', cubeAccessoryController);

module.exports = router;