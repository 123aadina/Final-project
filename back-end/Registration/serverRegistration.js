const express = require("express");
const { User } = require("./dbRegistration.js");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session");
const { validateForm } = require("./validationServer");
const jtw = require("jsonwebtoken");

//setting the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "ssshhhhh" }));
app.use(cors());

//Register user and Schema for email ,password, name, issues ...
app.post("/registration", (req, res) => {
  let registerFormFields = req.body;
  // Match fields from the frontend to DB field names
  console.log(registerFormFields);
  if (validateForm(registerFormFields) === false) {
    res.send(401);
    return;
  }
  //checking if the user exists in db
  User.find({ name: registerFormFields.name }, (error, docs) => {
    if (docs.length > 0) {
      //user exists in db reject the request
      console.log("User is already registered");
      res.send(400);
    } else {
      //user does not exist so it is created
      // Convert password to hash
      let hashedPassword = bcrypt.hashSync(registerFormFields.password, 10);
      registerFormFields.password = hashedPassword;
      User.create(registerFormFields, err => {
        if (err) {
          console.log(err);
          res.send(400);
        } else {
          res.send(200);
        }
      });
    }
  });
});

// Find User and create the token
// Route for the login form
app.post("/login", (req, res, next) => {
  User.findOne({ name: req.body.name })
    .then(user => {
      if (!user) {
        console.log(`User ${req.body.name} not found.`);
        res.send(401);
        return;
      }

      //we have to compare if the password with the registration form matches
      bcrypt.compare(req.body.password, user.password).then(success => {
        if (!success) {
          console.log(`Password for user ${req.body.name} not matched.`);
          res.send(401);
          return;
        }
        //if authentication is successful a token is created with the data we require
        const secret = "jtw-master-secret";
        const token = jtw.sign(
          { id: user.id, password: user.password },
          secret,
          { expiresIn: "2h" }
        );
        res.json({ jwtToken: token });
      });
    })
    .catch(error => next(err));
});

//server listening on 8000;
const port = 8000;
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
