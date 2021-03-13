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

const siteSchema = new mongoose.Schema(
  {
    background: { type: String, default: "flowers" },
    theme: {
      type: String,
      default: "basic",
    },
    buttons: { type: String, default: "rounded" },
    fonts: { type: String, default: "Arial" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Site", siteSchema);
