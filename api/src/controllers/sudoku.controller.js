const httpStatus = require('http-status');
const Sudoku = require('../models/sudoku.model');
const GameState = require('../models/gameState.model');

/**
 * Get sudoku puzzles list
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
