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

    return User.create({ username, password: hashedPassword });

}

exports.login = async function ({ username, password }) {
    //check if such user
    const user = await User.findOne({ username });

    if (!user) {
        return user;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return user;
    }

    // return token 
    const jwtSignPromise = new Promise((resolve, reject) => {
        jwt.sign({ username: username.user, _id: user._id }, secret, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                reject(err);
            }

            resolve(token);
        })
    })

    return jwtSignPromise;
}