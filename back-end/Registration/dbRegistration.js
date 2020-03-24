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
    email: { type: String, required: false },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    issues: { type: Number, required: true },
    languages: { type: String, required: false },
    comment: { type: String, required: false },
    emailChecked: { type: Boolean, required: false },
    agreeChecked: { type: Boolean, required: true }
  })
);

module.exports = { User };
