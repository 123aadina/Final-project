const express = require("express");
const router = express.Router();
const { User } = require("./dbRegistration.js");
const bcrypt = require("bcrypt");
const { validateForm } = require("./validationServer");
const { sendEmailLink } = require("../SendEmailLink/sendEmail");
const jtw = require("jsonwebtoken");

//Register user and Schema for email ,password, name, issues ...
router.post("/registration", (req, res) => {
  let registerFormFields = req.body;

  // Match fields from the frontend to DB field names
  console.log(registerFormFields);
  if (validateForm(registerFormFields) === false) {
    res.send(401);
    return;
  }
  //checking by email if the user exists in db
  User.find({ email: registerFormFields.email }, (error, docs) => {
    if (docs.length > 0) {
      //user exists in db reject the request
      console.log("User is already registered");
      res.send(400);
    } else {
      //user does not exist so it is created
      // Convert password to hash
      let hashedPassword = bcrypt.hashSync(registerFormFields.password, 10);
      registerFormFields.password = hashedPassword;
      User.create(registerFormFields, (err) => {
        if (err) {
          console.log(err);
          res.send(400);
        } else {
          if (registerFormFields.email !== null) {
            sendEmailLink(registerFormFields.email);
          }
          res.send(200);
        }
      });
    }
  });
});

//after registration confirm the new user
//   router.post("/confirm/:token", (req, res, next) => {
//     user.findOne({
//       activeToken: req.body.activeToken,
//       activeExpires: { $gt: Date.now() },
//       function(err, user) {
//         if (err) {
//           return next(err);
//         }
//         if (!user) {
//           res.send();
//         }
//       },
//     });
//   });
// });

// Find User and create the token
// Route for the login form
router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        console.log(`User ${req.body.email} not found.`);
        res.send(401);
        return;
      }

      //we have to compare if the password with the registration form matches
      bcrypt.compare(req.body.password, user.password).then((success) => {
        if (!success) {
          console.log(`Password for user ${req.body.email} not matched.`);
          res.send(401);
          return;
        }
        //if authentication is successful a token is created with the data we require
        const secret = "jtw-master-secret";
        const token = jtw.sign(
          {
            id: user.id,
            password: user.password,
            isAdministrator: user.isAdministrator,
            email: user.email,
          },
          secret,
          { expiresIn: "2h" }
        );
        res.json({ jwtToken: token });
      });
    })
    .catch((error) => next(err));
});

module.exports = router;
