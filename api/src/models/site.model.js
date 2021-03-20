const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema(
  {
    background: { type: String, default: "flowers" },
    theme: {
      type: String,
      default: "basic",
    },
    button: {
      id: { type: String, default: "outline-rounded" },
      color: { type: String, default: "#fff" },
    },
    fonts: { type: String, default: "Arial" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Site", siteSchema);
