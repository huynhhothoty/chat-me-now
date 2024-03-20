const crud = require('./crudController');
const { Room } = require('../models/roomModel');

const create = crud.createOne(Room);
const updateOne = crud.updateOne(Room);
const getAll = crud.getAll(Room);
const getOne = crud.getOne(Room, { path: 'members' });
const deleteOne = crud.deleteOne(Room);

module.exports = {
    create,
    updateOne,
    getAll,
    getOne,
    deleteOne,
};
