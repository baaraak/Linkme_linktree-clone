const httpStatus = require("http-status");
const Link = require("../models/link.model");
const siteModel = require("../models/site.model");

/**
 * Create new link
 */
exports.create = async (req, res, next) => {
  try {
    const link = new Link({ user: req.user._id });
    await link.save();
    await siteModel.update(
      { user: req.user._id },
      { $push: { links: link._id } }
    );
    await req.user.save();
    const links = await Link.find({ user: req.user._id });
    res.status(httpStatus.CREATED);
    res.json({ links });
  } catch (error) {
    next(error);
  }
};
