const { Router } = require('express');
const {
    create,
    getAll,
    updateOne,
    getOne,
    deleteOne,
} = require('../controllers/roomController');
const { authentication } = require('../middlewares/auth/authenticate');

const router = Router();
router.use(authentication);

router.route('/').post(create).get(getAll);
router.route('/:id').patch(updateOne).get(getOne).delete(deleteOne);

module.exports = {
    router,
};
