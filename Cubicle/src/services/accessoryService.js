const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
    return Accessory.create({ name, description, imageUrl })
}

const accessoryService = {
    create
}

//exports.create = create;
module.exports = accessoryService;
