const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setting the connection with Atlas
const strMongoConnection =
  "mongodb+srv://Hamida:finalProject17@cluster0-bawxv.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(strMongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection worked"))
  .catch(err => console.log("Connection failed"));

//creating the Schema models
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    issues: { type: String, required: true },
    languages: { type: String, required: true },
    comment: { type: String, required: true },
    emailChecked: { type: String, required: true },
    agreeChecked: { type: String, required: true }
  })
);

module.exports = { User };
