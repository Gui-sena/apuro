const mongoose = require('mongoose');
const question = require('./question.js');

const examSchema = mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },

    scheduledDate: {
        type: Date,
        required: false 
    },

    timeLimit: { // in seconds
        type: Number,
        required: false
    },

    shuffle: {
        type: Boolean,
        required: false
    },

    questions: [question.schema]
});

module.exports = mongoose.model('Exam', examSchema);