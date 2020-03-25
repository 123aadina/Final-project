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
api.listen(3000, () => console.log("Started on 3000"));

/** STATIC FILES*/
api.use(express.static(path.join(__dirname, "pages")));

/** CONNECT TO DATABASE */
const mongoString =
  "mongodb+srv://hamida:hamida@cluster0-idevj.mongodb.net/final-project?retryWrites=true&w=majority";

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
const read = require("./routes/read");

api.use(middleware.cors);
api.use(read);


/** EXPORT PATH */
module.exports = api;
