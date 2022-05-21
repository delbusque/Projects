const express = require('express');
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV]

const app = express();
const port = 5000;

// const initHandlebars = require('./config/handlebars.js');
// initHandlebars(app);
require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './public')))

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost:${config.PORT}`))