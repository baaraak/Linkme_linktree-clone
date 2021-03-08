const httpStatus = require("http-status");
const Link = require("../models/link.model");
const Site = require("../models/site.model");

/**
 * Create new link
 */
exports.create = async (req, res, next) => {
  try {
    const highestIndexRecord = (
      await Link.find({ user: req.user._id }).sort({ index: -1 }).limit(1)
    )[0];
    const index = highestIndexRecord?.index + 1 || 0;

    const link = new Link({ user: req.user._id, index });
    await link.save();
    await Site.update({ user: req.user._id }, { $push: { links: link._id } });
    await req.user.save();
    const links = await Link.find({ user: req.user._id });
    res.status(httpStatus.CREATED);
    res.json({ links });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete Link
 */
exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Site.update({ user: req.user._id }, { $pull: { links: id } });
    await Link.remove({ _id: id });
    const links = await Link.find({ user: req.user._id });
    res.status(httpStatus.OK);
    res.json({ links });
  } catch (error) {
    next(error);
  }
};
