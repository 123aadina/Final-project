/** EXTERNAL DEPENDENCIES */
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

/** INIT */
const api = express();

/** REQUEST PARSERS */
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

/** START SERVER*/
api.listen(3200, () => console.log("Started on 3200"));

/** STATIC FILES*/
api.use(express.static(path.join(__dirname, "pages")));

/** CONNECT TO DATABASE */
const mongoString =
  "mongodb+srv://Virgile:mate@clusterdci-w6r9z.azure.mongodb.net/todolist?retryWrites=true&w=majority";

mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log(err);
  });

/** ROUTES */
const middleware = require("./middleware");

api.use(middleware.cors);

/** EXPORT PATH */
module.exports = api;
