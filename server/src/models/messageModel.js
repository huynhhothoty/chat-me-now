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
        },
        type: {
            type: String,
            enum: {
                values: ['user', 'system'],
                message: 'invalid type of message',
            },
            default: 'user',
        },
    },
    { timestamps: true }
);

// middleware
messageSchema.pre(/^find/, function () {
    this.populate({ path: 'sender', select: 'name avatar _id' });
});

// create and export
const Message = mongoose.model('Message', messageSchema);
module.exports = { Message };
