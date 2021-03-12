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

/**
 * Update Link
 */
exports.update = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    await Link.findOneAndUpdate({ _id }, { $set: req.body }).exec();
    const links = await Link.find({ user: req.user._id });
    res.status(httpStatus.OK);
    res.json({ links });
  } catch (error) {
    next(error);
  }
};

/**
 * Re-Order links indexes
 */
exports.reOrder = async (req, res, next) => {
  const { links } = req.body;
  try {
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      await Link.findOneAndUpdate(
        { _id: link._id },
        { $set: { index: link.index } }
      );
    }
    const sortedLinks = await Link.find({ user: req.user._id });
    res.json({ links: sortedLinks });
  } catch (error) {
    next(error);
  }
};
