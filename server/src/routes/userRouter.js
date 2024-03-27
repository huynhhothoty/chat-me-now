const express = require('express');
const userRouter = express.Router();
const {
    register,
    login,
    logout,
    forgetPassword,
    resetPassword,
    changePassword,
} = require('../controllers/authController');
const { getCurrent, getAllUser } = require('../controllers/userController');
const { authentication } = require('../middlewares/auth/authenticate');

userRouter.route('/').get(authentication, getAllUser);
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(logout);
userRouter.route('/forgetpassword').post(forgetPassword);
userRouter.route('/resetpassword/:id').patch(resetPassword);
userRouter.route('/changepassword').patch(authentication, changePassword);
userRouter.route('/me').get(authentication, getCurrent);

module.exports = { userRouter };
