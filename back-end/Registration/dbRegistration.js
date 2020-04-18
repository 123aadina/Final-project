const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the Schema models
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    issues: { type: Number, required: true },
    languages: { type: [String], required: false },
    comment: { type: String, required: false },
    emailChecked: { type: Boolean, required: false },
    agreeChecked: { type: Boolean, required: true },
    chatBoxChecked: { type: Boolean, required: false },
    //to distinguish if a user is an administrator or not for the chat
    isAdministrator: { type: Boolean, required: true, default: false },
    chatRoom: { type: String, required: false },
    chat: { type: Boolean, default: false, required: true },
    //define users activation state (for the email he is going to receive)
    active: { type: Boolean, default: false, required: true },
    //the activation code user is going to receive to his email and expiration time
    activeToken: { type: String },
    activeExpires: { type: Date },
  })
);

module.exports = { User };
