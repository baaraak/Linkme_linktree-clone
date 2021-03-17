const mongoose = require("mongoose");

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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    clicks: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Link", linkSchema);
