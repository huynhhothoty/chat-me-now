const express = require('express');
const { errorHandler } = require('./middlewares/error/ErrorHandler');
const { CustomError } = require('./utils/CustomError');
const { connectDatabase } = require('./configs/DBconfig');
const { rootRouter } = require('./routes/index');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// init app
const app = express();
connectDatabase();

// socket
const socketIO = require('socket.io');
const http = require('http');
const { Message } = require('./models/messageModel');
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    },
});
io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    // on room
    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
    });

    socket.on('leave', (roomId) => {
        socket.leave(roomId);
    });

    socket.on('sendMsg', (roomId) => {
        io.to(roomId).emit('newMsg');
    });

    socket.on('addMember', async ({ name, roomId }) => {
        const newNotice = new Message({
            room: roomId,
            message: `${name} has just joined our room`,
            type: 'system',
        });
        await newNotice.save();
        io.to(roomId).emit('notice');
    });

    socket.on('remove', async ({ performer, name, roomId }) => {
        const newNotice = new Message({
            room: roomId,
            message: `${performer} has removed ${name} from room`,
            type: 'system',
        });
        await newNotice.save();
        console.log('remove:', roomId);
        io.to(roomId).emit('notice');
    });

    //
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        for (const event of Object.keys(socket.listeners)) {
            socket.removeAllListeners(event);
        }
    });
});

// init middleware
const corsOptions = {
    origin: ['https://toystation.vercel.app', 'http://localhost:5173'],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// main api route
app.use('/api', rootRouter);

// invalid route error catching
app.all('*', (req, res, next) => {
    next(new CustomError(`Can't find this route`, 404));
});

// middleware use to handle error
app.use(errorHandler);

module.exports = {
    app,
    server,
};
