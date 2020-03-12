const express = require("express");
const router = express.Router();

const models = require("../models");

const User = models.User;
const Translation = models.Translation;

router.get("/users", (req, res, next) => {
  User.find().then(users => {
    res.send(users);
  });
});

router.get("/translations", (req, res, next) => {
  Translation.find().then(translations => {
    res.send(translations);
  });
});

module.exports = router;
