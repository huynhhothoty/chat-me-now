const crud = require('./crudController');
const { Room } = require('../models/roomModel');
const { CustomError } = require('../utils/CustomError');
const { Message } = require('../models/messageModel');

const create = crud.createOne(Room);
const updateOne = crud.updateOne(Room);
const getAll = crud.getAll(Room);
const getOne = crud.getOne(Room, { path: 'members' });
const deleteOne = async (req, res, next) => {
    try {
        const doc = await Room.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new CustomError('No document with this Id', 404));
        }

        await Message.deleteMany({ room: req.params.id });

        res.status(204).send({
            status: 'ok',
            data: doc,
        });
    } catch (error) {
        console.log(error);
        return next(new CustomError(error));
    }
};

module.exports = {
    create,
    updateOne,
    getAll,
    getOne,
    deleteOne,
};
