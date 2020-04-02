module.exports = server => {
  const io = require("socket.io")(server);

  // const jtw = require("jsonwebtoken");
  // const router = express.Router();

  // io.use((socket, next) => {
  //   const token = socket.handshake.query.token;
  // });

  //setting connection between server and client
  io.on("connection", function(socket) {
    console.log("User is connected");

    socket.on("chat message", function(msg) {
      console.log("message:" + JSON.stringify(msg));
      //broadcasting sending to all clients
      io.emit("chat message", msg);
      //edw o administrator tha prepei na lamvanei eidopoiisi oti exei ginei to connection gia na
    });
    socket.on("disconnect", function(user) {
      io.emit("User has left the chat");
    });
  });

  // //verifying token(just to remember it expires after 2h)
  // jtw.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
  //   if (!user) {
  //     return next(err);
  //   } else {
  //     //if user is verified we store users.id on the users socket and then next() to let them connect
  //     socket._id = decoded._id;
  //     next();
  //   }
  // });

  // //http listening on port 8000??ask Robert
  // const port = 8000;
  // http.listen(port, () => {
  //   console.log(`Listening on port ${port}`);
  // });

  // module.exports = router;

  //receiving and updating messages?
  //gia kathe xristi prepei na iparxei diaforetiko kanali tha to kanoume me to username gia na dimiourgisoume room kai meta tha anoixei to kanali
  //var room = name
  //validation gia ta kanaliacd
  //prepei o administrator na exei prosvasi se ola ta kanalia
};
