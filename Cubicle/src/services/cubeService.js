const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory.js');

const create = (name, description, imageUrl, difficulty, userId) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty,

    });
    cube.owner = userId;
    return cube.save();
}

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).populate('accessories').lean();

const search = async (text, from, to) => {
    let result = await Cube.find({}).lean();

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }
    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }
    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }
    return result;
}


const attachAccessory = async (cubeId, accessoryId) => {

    let cube = await Cube.findById(cubeId).populate('accessories');

    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

const edit = async (cubeId, newData) => {

    let cube = await Cube.findByIdAndUpdate(cubeId, newData);
    return cube;
}

module.exports = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory,
    edit
}