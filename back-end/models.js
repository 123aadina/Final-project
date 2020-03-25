const mongoose = require("mongoose");

//model for Users
/*
const User = mongoose.model(
  "Users",
  new mongoose.Schema(
    {
      name: { type: String },
      email: { type: String, unique: true },
      phone: {type: Number},
      password: { type: String },
      languages: Object,
      comment: String
    },
    { versionKey: false }
  )
);*/


//model for Translation
/*
const Translation = mongoose.model(
  "Translations",
  new mongoose.Schema(
    {
      user: { type: String },
      language: { type: String },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    },
    { versionKey: false }
  )
);*/

//model for Organisation
const Organisation = mongoose.model(
  "Organisation",
  new mongoose.Schema(
    {
      name:{ type: String, required: true },
      description: String,
      category: [String],
      link: { type: String, required: true }
    },
    { versionKey: false }
  )
);

//model for Problem
const Problem = mongoose.model(
  "Problem",
  new mongoose.Schema(
    {
      title: {type: String, required: true },
      organisations : [
        {ref: "Organisation",
         type:mongoose.Schema.Types.ObjectId,  }
      ]
    },
    { versionKey: false }
  )
);
module.exports = {Organisation, Problem };

