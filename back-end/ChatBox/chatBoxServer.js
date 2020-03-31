const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const jtw = require("jsonwebtoken");

//setting middleware for the api and socket 
api.use((req, res, next) => {
  // res.set sets an HTTP header on the response
  // these two headers grant EVERYBODY access to our API
  res.set('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
  res.set('ACCESS-CONTROL-ALLOW-HEADERS', '*');
  res.set('ACCESS-CONTROL-ALLOW-METHODS', '*');
  next();

app.use(express.json());
io.use((socket, next) => {
  const token = socket.handshake.query.token;
});

//verifying token(just to remember it expires after 2h)
jtw.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
  if (err) {
    return next(err);
  } else {
    //if user is verified we store users.id on the users socket and then next() to let them connect
    socket._id = decoded._id;
    next();
  }
});

//setting connection between server and client
io.on("connection", function(socket) {
  console.log("User is connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    //broadcasting sending to all clients
    io.emit("chat message", msg);
  });
  socket.on("disconnect", function(user) {
    io.emit("User has left the chat");
  });
});

//receiving and updating messages

//http listening on
const port = 8000;
http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//prepei kathe xristis na exei to diko tou kanali kai na xei prosvasi o xristis kai oi administrators

//prepei o administrator na exei prosvasi se ola ta kanalia

//1.authodicate user kai create a unique connection
