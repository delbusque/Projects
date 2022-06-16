const express = require('express');
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database');
const cookieParser = require('cookie-parser');

const app = express();

// const initHandlebars = require('./config/handlebars.js');
// initHandlebars(app);
require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    });

