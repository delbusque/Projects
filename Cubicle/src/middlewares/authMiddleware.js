const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { secret, userSession } = require('../../constants.js');

const jwtVerify = promisify(jwt.verify)

exports.auth = async (req, res, next) => {

    let token = req.cookies[userSession];

    if (token) {
        try {
            let decodedToken = await jwtVerify(token, secret);

            req.user = decodedToken;
            res.locals.user = decodedToken;

        } catch (err) {
            console.log(err);
            return res.redirect('/404');
        }
    }

    next();
}

exports.isAuth = async (req, res, next) => {

    if (!req.user) {
        return res.redirect('/');
    }


    next();
}