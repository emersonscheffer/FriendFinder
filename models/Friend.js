const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imagelink: {
        type: String,
        required: true
    }
    ,
    answer1: {
        type: Number,
        required: true
    }
    ,
    answer2: {
        type: Number,
        required: true
    },
    answer3: {
        type: Number,
        required: true
    },
    answer4: {
        type: Number,
        required: true
    },
    answer5: {
        type: Number,
        required: true
    },
    answer6: {
        type: Number,
        required: true
    },
    answer7: {
        type: Number,
        required: true
    },
    answer8: {
        type: Number,
        required: true
    },
    answer9: {
        type: Number,
        required: true
    },
    answer10: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    match: {
        type: String,
        required: false
    }

});

module.exports = Friend = mongoose.model('friend', FriendSchema);