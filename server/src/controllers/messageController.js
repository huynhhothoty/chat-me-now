const crud = require('./crudController');
const { Message } = require('../models/messageModel');

const create = crud.createOne(Message);
const updateOne = crud.updateOne(Message);
const getAll = crud.getAll(Message, null);
const getOne = crud.getOne(Message);
const deleteOne = crud.deleteOne(Message);

module.exports = {
    create,
    updateOne,
    getAll,
    getOne,
    deleteOne,
};
