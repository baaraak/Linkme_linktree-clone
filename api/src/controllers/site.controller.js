const httpStatus = require("http-status");
const { omit } = require("lodash");
const Site = require("../models/site.model");

/**
 * Load site and append to req.
 */
exports.load = async (req, res, next, id) => {
  try {
    const site = await Site.findById(id).populate("links");
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

/**
 * Update site
 */
exports.update = async (req, res, next) => {
  try {
    const site = await Site.findOne({ user: req.user._id }).populate("links");
    const newSite = Object.assign(site, req.body);
    await newSite.save();
    return res.json({ site: newSite });
  } catch (error) {
    return next(error);
  }
};
