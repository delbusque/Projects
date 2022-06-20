const router = require('express').Router();
const authService = require('../services/authService.js');
const { userSession } = require('../../constants.js');
const validator = require('validator');
const { body, validationResult } = require('express-validator');




router.get('/register', (req, res) => {
    res.render('auth/register');
});

//router.post('/register', async (req, res) => {
//
//    if (!validator.isEmail(req.body.username)) {
//        return res.status(401).redirect('/about');
//    }
//
//    let user = await authService.register(req.body);
//
//    if (!user) {
//        res.send('Passwords must be equal')
//    } else {
//        res.redirect('/auth/login');
//    }
//});

router.post('/register',
    body('username').isEmail(),
    body('password').isLength({ min: 3 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).redirect('/about');
        }

        let user = await authService.register(req.body);

        if (!user) {
            res.send('Passwords must be equal')
        } else {
            res.redirect('/auth/login');
        }
    }
)

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {

    let token = await authService.login(req.body);

    if (!token) {
        res.status(400).send('Username or password do not match !!!')
    } else {
        res.cookie(userSession, token, { httpOnly: true });
        res.redirect('/');
    }

});

router.get('/logout', async (req, res) => {
    res.clearCookie(userSession);
    res.redirect('/');
})

module.exports = router;