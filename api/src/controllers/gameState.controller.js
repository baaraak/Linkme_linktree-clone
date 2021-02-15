const httpStatus = require('http-status');
const { omit } = require('lodash');
const User = require('../models/user.model');

/**
 * Get game state
 */
exports.get = async (req, res, next) => {
    try {
        const puzzles = await Sudoku.find({});
        res.status(httpStatus.OK);
        res.json(puzzles);
    } catch (error) {
        return next(error);
    }
};
/**
 * Create new user
 */
exports.create = async (req, res, next) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(httpStatus.CREATED);
        res.json(savedUser.transform());
    } catch (error) {
        next(User.checkDuplicateEmail(error));
    }
};

/**
 * Update existing user
 */
exports.update = (req, res, next) => {
    const user = Object.assign(req.locals.user, req.body);

    user.save()
        .then((savedUser) => res.json(savedUser.transform()))
        .catch((e) => next(User.checkDuplicateEmail(e)));
};

/**
 * Delete user
 */
exports.remove = (req, res, next) => {
    const { user } = req.locals;

    user.remove()
        .then(() => res.status(httpStatus.NO_CONTENT).end())
        .catch((e) => next(e));
};
