const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setting the connection with Atlas
// const strMongoConnection = "";
// mongoose
//   .connect(strMongoConnection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("Connection worked"))
//   .catch(err => console.log("Connection failed"));

//creating the Schema models
//name,email,phone ,password tha prepei na simperilavw ola ta pedia mou sto schema?diladi kai languages issues
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: string, required: true },
    email: { type: string, required: true },
    password: { type: string, required: true },
    phone: { type: string, required: true },
    issues: { type: string, required: true },
    languages: { type: string, required: true },
    comment: { type: string, required: true },
    emailChecked: { type: string, required: true },
    agreeChecked: { type: string, required: true }
  })
);

module.exports = { User };
