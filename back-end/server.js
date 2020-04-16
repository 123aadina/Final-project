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
const server = api.listen(3000, () => console.log("Started on 3000"));

api.get("/", (req, res, next) => {
  res.send(`Hello world`);
});

/** STATIC FILES*/
api.use(express.static(path.join(__dirname, "pages")));

/** CONNECT TO DATABASE */
const mongoString =
  "mongodb+srv://hamida:hamida@cluster0-idevj.mongodb.net/final-project?retryWrites=true&w=majority";

mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

const middleware = require("./middleware");
api.use(middleware.cors);

/** ROUTES */
const read = require("./routes/read");
const serverRegistration = require("./Registration/serverRegistration");
const chatBoxServer = require("./ChatBox/chatBoxServer")(server);

api.use(read);
api.use(serverRegistration);

/** EXPORT PATH */
module.exports = api;
