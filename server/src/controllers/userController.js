const { User } = require('../models/userModel');
const { CustomError } = require('../utils/CustomError');

const getCurrent = async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).send({
            status: 'ok',
            data: user,
        });
    } catch (error) {
        console.log(error);
        next(new CustomError(error));
    }
};

module.exports = {
    getCurrent,
};
