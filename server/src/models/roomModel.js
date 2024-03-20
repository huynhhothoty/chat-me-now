const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
    ],
    name: {
        type: String,
        default: 'Chat number ' + Date.now(),
    },
});

// middleware

// create and export
const Room = mongoose.model('Room', roomSchema);
module.exports = { Room };
