const { Router } = require('express');
const { userRouter } = require('./userRouter');
const { router: roomRouter } = require('./roomRouter');
const { router: messageRouter } = require('./messageRouter');

const rootRouter = Router();
rootRouter.use('/user', userRouter);
rootRouter.use('/room', roomRouter);
rootRouter.use('/message', messageRouter);

module.exports = { rootRouter };
