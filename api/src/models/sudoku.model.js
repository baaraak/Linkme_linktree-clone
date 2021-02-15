const mongoose = require('mongoose');
const crypto = require('crypto');
const moment = require('moment-timezone');

const Types = ['classic', 'knight', 'consecutive'];

const sudokuSchema = new mongoose.Schema({
    grid: {
        type: String,
        unique: true,
        required: true,
    },
    type: {
        type: String,
        enum: Types,
        required: true,
    },
    author: String,
});

sudokuSchema.static.Types = Types;

const Sudoku = mongoose.model('Sudoku', sudokuSchema);
module.exports = Sudoku;
