const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 5000;

// const initHandlebars = require('./config/handlebars.js');
// initHandlebars(app);
require('./config/handlebars.js')(app);

app.use(express.static(path.resolve(__dirname, './public')))

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, console.log.bind(console, `App is running on http://localhost:${port}`))