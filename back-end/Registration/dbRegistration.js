const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the Schema models
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    issues: { type: Number, required: true },
    languages: { type: [String], required: false },
    comment: { type: String, required: false },
    // emailChecked: { type: Boolean, required: false },
    agreeChecked: { type: Boolean, required: true },
    chatBoxChecked: { type: Boolean, required: false },
    //to distinguish if a user is an administrator or not for the chat
    isAdministrator: { type: Boolean, required: true, default: false },
    chatRoom: { type: String, required: false },
    chat: { type: Boolean, default: false, required: true },
    active: { type: Boolean, default: false, required: true },
    activeToken: { type: String },
    activeExpires: { Date },
  })
);

module.exports = { User };
