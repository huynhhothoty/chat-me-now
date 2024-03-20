const { Router } = require('express');
const {
    create,
    getAll,
    updateOne,
    getOne,
    deleteOne,
} = require('../controllers/messageController');

const router = Router();
router.route('/').post(create).get(getAll);
router.route('/:id').post(updateOne).get(getOne).delete(deleteOne);

module.exports = {
    router,
};
