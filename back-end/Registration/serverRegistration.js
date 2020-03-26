const express = require("express");
const { User } = require("./dbRegistration.js");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session");
const { validateForm } = require("./validationServer");

//setting the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "ssshhhhh" }));
app.use(cors());

//Register user and Schema for email ,password, name, issues ...
app.post("/registration", (req, res) => {
  let registerFormFields = req.body;
  // Match fields from the frontend to DB field names

  if (validateForm(registerFormFields) === false) {
    res.send(401);
    return;
  }
  //checking if the user exists in db
  User.find({ name: registerFormFields.name }, (error, docs) => {
    if (docs.length > 0) {
      //user exists in db reject the request

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

//server listening on 8000;
let port = 8000;
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
