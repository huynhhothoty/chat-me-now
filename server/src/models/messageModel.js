const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        room: {
            type: mongoose.Schema.ObjectId,
            required: [true, 'You must enter roomid'],
        },
        message: {
            type: String,
            required: [true, 'You must enter a message'],
        },
        sender: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'You must enter user id'],
        },
    },
    { timestamps: true }
);

// middleware

// create and export
const Message = mongoose.model('Message', messageSchema);
module.exports = { Message };
