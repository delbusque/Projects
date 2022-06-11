const router = require('express').Router();

// const {create } = require('../services/accessoryService'); 
const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    let { name, description, imageUrl } = req.body;

    try {
        await accessoryService.create(name, description, imageUrl);
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error.message).end();
    }

})



module.exports = router;