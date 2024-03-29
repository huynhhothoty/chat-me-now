const mongoose = require('mongoose');
const { Message } = require('./messageModel');

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
    avatar: {
        type: String,
        default: 'https://cdn0.iconfinder.com/data/icons/avatar-1-2/512/group-2-512.png',
    },
});

// middleware

// create and export
const Room = mongoose.model('Room', roomSchema);
module.exports = { Room };
