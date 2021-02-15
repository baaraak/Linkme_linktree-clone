const mongoose = require('mongoose');
const crypto = require('crypto');
const moment = require('moment-timezone');

const GameStateSchema = new mongoose.Schema({
    grid: String,
    time: Date,
    sudoku: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sudoku',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const GameState = mongoose.model('GameState', GameStateSchema);
module.exports = GameState;
