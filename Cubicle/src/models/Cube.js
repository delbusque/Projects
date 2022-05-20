const uniqid = require('uniqid')

class Cube {
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
        return Cube.#cubes.slice();
    }

    static addCube(cube) {
        return Cube.#cubes.push(cube);
    }
}

module.exports = Cube;