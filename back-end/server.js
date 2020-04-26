/** EXTERNAL DEPENDENCIES */
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

/** INIT */
const api = express();

const reactPath = path.join(__dirname, "../front-end/build");
console.log(reactPath);

/** REQUEST PARSERS */
api.use(express.static(reactPath));
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

/** START SERVER*/
const port = process.env.PORT || 3000;
const server = api.listen(port, () => console.log("Started on 3000"));

/*api.get("/", (req, res, next) => {
  res.send(`Hello world`);
});*/

/** STATIC FILES*/
//api.use(express.static(path.join(__dirname, "../")));

/** CONNECT TO DATABASE */
const mongoString =
  "mongodb+srv://hamida:hamida@cluster0-idevj.mongodb.net/final-project?retryWrites=true&w=majority";
const db = process.env.MONGO_URI || mongoString;

mongoose
  .connect(db, {
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
