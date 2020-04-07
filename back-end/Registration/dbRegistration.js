const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the Schema models
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    issues: { type: Number, required: true },
    languages: { type: String, required: false },
    comment: { type: String, required: false },
    emailChecked: { type: Boolean, required: false },
    agreeChecked: { type: Boolean, required: true },
    //to distinguish if a user is an administrator or not for the chat
    isAdministrator: { type: Boolean, required: true, default: false },
  })
);

module.exports = { User };
