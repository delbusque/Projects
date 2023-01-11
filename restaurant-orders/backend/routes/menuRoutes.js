const express = require('express');

const router = express.Router();

const {
    getAllDrinks,
    getOneDrink
} = require('../controllers/menuController.js')

router.get('/drinks', getAllDrinks);
router.get('/drinks/:id', getOneDrink)

module.exports = router;