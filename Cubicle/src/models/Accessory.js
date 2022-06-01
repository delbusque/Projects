const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is required !'],
        validate: [/^https?:\/\//i, 'Image Url is invalid !']
    },
    description: {
        type: String,
        //required: true,
        //maxlength: 5000
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;