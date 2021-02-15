const express = require('express');
const { authorize } = require('passport');
const controller = require('../controllers/sudoku.controller');
const { LOGGED_USER } = require('../middlewares/auth');
const {
    listUsers,
    createUser,
    replaceUser,
    updateUser,
} = require('../validations/user.validation');

const router = express.Router();

router
    .route('/sudoku')
    /**
     * @api {get} /sudoku Get list of all sudoku puzzles
     */
    .get(controller.get)
    /**
     * @api {get} /sudoku Save sudoku game state
     */
    .get(
        authorize(LOGGED_USER),
        validate(updateUser),
        controller.createGameState
    );

module.exports = router;