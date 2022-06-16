const router = require('express').Router();
const authService = require('../services/authService.js');
const { userSession } = require('../../constants.js');



router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {

    let user = await authService.register(req.body);

    if (!user) {
        res.send('Passwords must be equal')
    } else {
        res.redirect('/auth/login');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {

    const token = await authService.login(req.body);

    if (!token) {
        res.status(400).send('Username or password do not match !!!')
    } else {
        res.cookie(userSession, token);
        res.redirect('/');
    }

});

module.exports = router;