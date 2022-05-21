const Cube = require('../models/Cube.js');

const create = (name, decription, imageUrl, difficulty) => {
    let cube = new Cube(name, decription, imageUrl, difficulty);
    Cube.addCube(cube);
}

const getAll = () => {
    return Cube.cubes;
}

const getOne = (id) => {
    return Cube.cubes.find(x => x.id == id);
}

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