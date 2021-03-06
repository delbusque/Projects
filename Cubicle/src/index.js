const express = require('express');
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware.js');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware.js');

const app = express();

// const initHandlebars = require('./config/handlebars.js');
// initHandlebars(app);
require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());

app.use(auth);
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(errorHandler);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    });

