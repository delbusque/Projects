const router = require('express').Router();
const authService = require('../services/authService.js');
const { userSession } = require('../../constants.js');
const validator = require('validator');
const { body, validationResult } = require('express-validator');




router.get('/register', (req, res) => {
    res.render('auth/register');
});

//router.post('/register', async (req, res, next) => {
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
    async (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //return res.status(401).redirect('/about');
            let error = { message: 'Invalid email or password' };

            next(error);
        } else {
            try {
                await authService.register(req.body);
                res.redirect('/auth/login');
            } catch (error) {
                res.status(401).render('auth/register', { error: error.message });
            }
        }

    }
)

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    try {
        let token = await authService.login(req.body);

        if (!token) {
            return res.redirect('/404');
        }

        res.cookie(userSession, token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        res.status(400).render('auth/login', { error: error.message })
    }


});

router.get('/logout', async (req, res) => {
    res.clearCookie(userSession);
    res.redirect('/');
})

module.exports = router;