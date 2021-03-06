const httpStatus = require("http-status");
const { omit } = require("lodash");
const Site = require("../models/site.model");

/**
 * Load site and append to req.
 */
exports.load = async (req, res, next, id) => {
  try {
    const site = await Site.findById(id);
    req.site = site;
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get site information
 */
exports.get = (req, res) => res.json({ site: req.site });
