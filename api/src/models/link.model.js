const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");
const jwt = require("jwt-simple");
const uuidv4 = require("uuid/v4");
const APIError = require("../utils/APIError");
const {
  env,
  jwtSecret,
  jwtExpirationInterval,
} = require("../config/constants");

const linkSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      default: "v28ave3worayhlv2kppe",
    },
    title: { type: String },
    href: { type: String },
    index: { type: Number, default: 0 },
    active: {
      type: Boolean,
      default: false,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    clicks: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Link", linkSchema);
