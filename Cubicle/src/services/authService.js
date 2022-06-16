const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../../constants.js');

exports.register = async function ({ username, password, repeatPassword }) {

    if (password !== repeatPassword) {
        return undefined;
    }

    const salt = 10;

    const hashedPassword = await bcrypt.hash(password, salt);

    return await User.create({ username, password: hashedPassword });

}

exports.login = async function ({ username, password }) {
    //check if such user
    const user = await User.findOne({ username }).lean();

    if (!user) {
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return false;
    }

    // return token 
    const jwtSignPromise = new Promise((resolve, reject) => {
        jwt.sign({ username: user.username, _id: user._id }, secret, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        })
    })

    return jwtSignPromise;
}