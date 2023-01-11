const Drink = require('../models/Drink.js');
const mongoose = require('mongoose');

const getAllDrinks = async (req, res) => {
    const drinks = await Drink.find({}).sort({ createdAt: -1 });

    res.status(200).json(drinks);
}

const getOneDrink = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such drink' })
    }

    const drink = await Drink.findById(id);

    if (!drink) {
        return res.status(400).json({ error: 'No such drink' })
    }

    res.status(200).json(drink);
}

module.exports = {
    getAllDrinks,
    getOneDrink
}