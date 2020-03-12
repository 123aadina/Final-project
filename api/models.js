const mongoose = require("mongoose");

const User = mongoose.model(
  "Users",
  new mongoose.Schema(
    {
      name: { type: String, unique: true },
      email: { type: String, unique: true },
      password: { type: String }
    },
    { versionKey: false }
  )
);

const Translation = mongoose.model(
  "Translations",
  new mongoose.Schema(
    {
      user: { type: String },
      language: { type: String },
      nav: { type: Object },
      org: { type: Object },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    },
    { versionKey: false }
  )
);

module.exports = { User, Translation };
