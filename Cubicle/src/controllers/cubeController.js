const express = require('express');
const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('../controllers/cubeAccessoryController');
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    let isOwner = cube.owner == req.user?._id
    res.render('cube/details', { ...cube, isOwner })
}

const editCube = async (req, res) => {

    let cube = await cubeService.edit(req.params.cubeId, req.body);

    if (!cube) {
        return res.redirect(`/404`);
    }

    res.redirect(`/cube/${req.params.cubeId}`)
}

router.get('/create', isAuth, (req, res) => {
    res.render('cube/create');
});

router.get('/:cubeId/edit', async (req, res) => {

    let cube = await cubeService.getOne(req.params.cubeId);

    if (cube.owner != req.user._id) {
        return res.redirect('/');

    }
    res.render('cube/edit', { cube });
});

router.get('/:cubeId/delete', async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/delete', { ...cube });
});

router.post('/:cubeId/delete', async (req, res) => {
    await cubeService.del(req.params.cubeId);
    res.redirect('/');
});

router.post('/create',
    body('name', 'Name is mandotary').notEmpty(),
    body('description').isLength({ min: 5, max: 100 }),
    async (req, res) => {
        let { name, description, imageUrl, difficulty } = req.body;
        let userId = req.user._id;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0].msg);
        }

        try {
            await cubeService.create(name, description, imageUrl, difficulty, userId);
            res.redirect('/');

        } catch (error) {
            res.status(400).send(error.message).end();
        }

    }
);

//router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.post('/:cubeId/edit', editCube);
router.use('/:cubeId/accessory/', cubeAccessoryController);

module.exports = router;