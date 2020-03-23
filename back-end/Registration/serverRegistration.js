const express = require("express");
const { User } = require("./dbRegistration.js");
const { cors } = require("../middleware");
const app = express();
const bcrypt = require(bcrypt);
const session = require("express-session");

//setting the middleware
app.use(express.json)();
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "ssshhhhh" }));
app.use(cors());

// app.get("/user/:id", (req, res) => {
//  user.password = users.map(user =>{
//    return user;
//  })
// }// Login a specific user
// app.get("/login", (req, res) => {});

//Register user and Schema for email ,password, name, issues ...
app.get("/registration", (req, res) => {
  let registerFormFields = req.body;
  console.log(registerFormFields);
  // Match fields from the frontend to DB field names

  // Convert password to hash
  let hashedPassword = User.map(user => {
    user.password = bcrypt.hashSync(user.password, 10);
  });

  //create user
  User.create(registerFormFields, err => {
    res.send();
  });
});

//server listening on 8000;
let port = 8000;
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
