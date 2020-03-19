const express = require("express");
const { User } = require("./dbRegistration.js");
const { cors } = require("../middleware");
const app = express();
const bcrypt = require(bcrypt);
const session = require("express-session");

//setting the middleware
app.use(express.json)();
app.use(session({ secret: "ssshhhhh" }));
app.use(cors());

//server listening on 8000;
let port = 8000;
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
