const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
    return Accessory.create({ name, description, imageUrl })
}

async function getAll() {

    return Accessory.find({}).lean();
}

async function getAllWithout(accessoriesIds) {

    return Accessory.find().where('_id').nin(accessoriesIds).lean();
}

const accessoryService = {
    create,
    getAll,
    getAllWithout
}

//exports.create = create;
module.exports = accessoryService;
