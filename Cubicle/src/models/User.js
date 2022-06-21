const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Username should be unique'],
        validate: /[a-zA-Z0-9]/,
        minlength: 5
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
        validate: /[a-zA-Z0-9]/,
    }
})

const User = mongoose.model('User', userShema);

module.exports = User;