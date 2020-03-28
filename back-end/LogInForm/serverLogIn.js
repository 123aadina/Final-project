const express = require("express");
const app = express();
const jtw = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserLogIn } = require("./dbLogIn");

//Middleware for the incoming data
app.use(express.urlencoded({ extended: true }));

// //Find User and create the token
// app.post("./login", (req, res, next) => {
//   UserLogIn.findOne({ password: req.body.password }).then(UserLogIn => {
//     if (!UserLogIn) {
//       return next(`Authentication failed`);
//     }

//     //we have to compare if the password with the registration form matches
//     bcrypt.compare (req.body.password, UserLogIn.password).then(success =>{
//         if (!success) {
//             return next (`Authentication failed`)
//         }
//         //if authentication is successful a token is created with the data we require
//     const secret = "jtw-master-secret"
//     const token = jtw.sign({ id: user.id, password: user.password }, secret, { expiresIn: "2h"})
//     res.send({token})
//     })
//   }).catch(error=>next(err));

// }
