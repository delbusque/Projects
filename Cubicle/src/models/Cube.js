const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Image Url is invalid !']
        //validate: {
        //    validator: function (value) {
        //        return /^https?:\/\//i.test(value);
        //    },
        //    message: (props) => `Image Url ${props.value} is not valid !`;
        //}
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
})

cubeSchema.path('name').validate(function (value) {
    return value.length > 1;
}, 'Name must be more than 1 character')

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;