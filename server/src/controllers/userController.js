const { User } = require('../models/userModel');
const { ApiFeatures } = require('../utils/ApiFeature');
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
const getAllUser = async (req, res, next) => {
    try {
        const initQuery = User.find().select('name email avatar _id').lean();
        const apiFeat = new ApiFeatures(initQuery, req.query);
        apiFeat.filter().sorting().pagination();
        const result = await apiFeat.myQuery;

        res.status(200).send({
            status: 'ok',
            total: result.length,
            data: result,
        });
    } catch (error) {
        console.log(error);
        next(new CustomError(error));
    }
};

module.exports = {
    getCurrent,
    getAllUser,
};
