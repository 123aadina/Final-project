const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//setting the connection here with the database
// mongoose.connect('mongodb://localhost/users_db', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection succeeded')
//     } else {
//         console.log('Error on DB connection: ' + err)
//     }

//Define and create the Schema model for UserLogIn
const UserLogIn = mongoose.model(
  "UserLogIn",
  new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
  })
);

module.exports = { UserLogIn };
