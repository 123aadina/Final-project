const mongoose = require("mongoose");


const User = mongoose.model(
  "Users",
  new mongoose.Schema(
    {
      name: { type: String },
      email: { type: String, unique: true },
      phone: {type: Number},
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
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    },
    { versionKey: false }
  )
);


const Orgnation = mongoose.model(
  "Orgnations",
  new mongoose.Schema(
    {
      name: String ,
      description: String,
      category: String,
      link: { type: String, required: true }
    },
    { versionKey: false }
  )
);

const Problem = mongoose.model(
  "Problems",
  new mongoose.Schema(
    {
      title: String ,
      orgnations : [
        {ref: "Orgnations",
         type:mongoose.Schema.Types.ObjectId,  }
      ]
    },
    { versionKey: false }
  )
);


module.exports = { User, Translation, Orgnation, Problem };

/* nav: { type: Object },
      org: { type: Object }, */
