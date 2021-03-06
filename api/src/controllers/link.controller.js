const httpStatus = require("http-status");
const Link = require("../models/link.model");

/**
 * Create new link
 */
exports.create = async (req, res, next) => {
  console.log("***********************");
  console.log("in create");
  console.log("***********************");
  try {
    const link = new Link();
    await link.save();
    res.status(httpStatus.CREATED);
    res.json({ link });
  } catch (error) {
    next(error);
  }
};
