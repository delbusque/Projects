const uniqid = require('uniqid')

class Cubicle {
    static #cubes = [
        {
            id: '28ut6swl37651ej',
            name: 'Ice Cube',
            description: 'Very old and nice old schooly ...',
            imageUrl: 'https://cdn.mrgoodlife.net/wp-content/uploads/2019/05/ice-cube-960x540.jpg',
            difficulty: '1'
        },
        {
            name: 'Cube Twist',
            description: 'CubeTwist Strange Shape Cube Black White Square II SQ2 3x3x3 Speed Cube Sector Magic Cube Puzzle Toy',
            imageUrl: 'https://ae01.alicdn.com/kf/HTB1bgzladzvK1RkSnfoq6zMwVXa3/CubeTwist-Strange-Shape-Cube-Black-White-Square-II-SQ2-3x3x3-Speed-Cube-Sector-Magic-Cube-Puzzle.jpg',
            difficulty: '6',
            id: '28ut8wsl3eh5w7l'
        },
        {
            name: 'Jewellery Rubik Cube',
            description: ' Pinterest Fashion Modern',
            imageUrl: 'https://i.pinimg.com/originals/89/e6/d9/89e6d9eed1ae375e6f0658cd7b75c28d.jpg',
            difficulty: '3',
            id: '28ut3vsl3fqkyp8'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
        this.id = uniqid();
    }

    static get cubes() {
        return Cubicle.#cubes.slice();
    }

    static addCube(cube) {
        return Cubicle.#cubes.push(cube);
    }
}

module.exports = Cubicle;