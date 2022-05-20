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

module.exports = {
    create,
    getAll,
    getOne
}