const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/user.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../middlewares/auth');
const {
    listUsers,
    createUser,
    replaceUser,
    updateUser,
} = require('../validations/user.validation');

const router = express.Router();

// Load user when API with userId route parameter is hit
router.param('userId', controller.load);

router
    .route('/:userId')
    /**
     * @api {get} users/:id Get current user information
     */
    .get(authorize(LOGGED_USER), controller.get)
    /**
     * @api {patch} users/:id Update some fields of a user document
     */
    .patch(authorize(LOGGED_USER), validate(updateUser), controller.update)
    /**
     * @api {patch} users/:id Delete a user
     */
    .delete(authorize(LOGGED_USER), controller.remove);

module.exports = router;
