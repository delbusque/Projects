const Cube = require('../models/Cube');

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty
    });
    return cube.save();
}

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).lean();

const search = (text, from, to) => {
    let result = Cube.cubes;

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


module.exports = {
    create,
    getAll,
    getOne,
    search
}