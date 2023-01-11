require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const menuRoutes = require('./routes/menuRoutes.js')

const app = express();

app.use(express.json());

app.use('/api/menu', menuRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Listening for requests on port ${process.env.PORT}...`));
    })
    .catch((err) => {
        console.log(err)
    })
