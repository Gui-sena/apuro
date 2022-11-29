const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    answer: {
        type: [String]
    }

});

module.exports = mongoose.model('Question', questionSchema);