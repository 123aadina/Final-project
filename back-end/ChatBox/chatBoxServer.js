module.exports = server => {
  const io = require("socket.io")(server);

  //handling the connection from the client(frontend)
  io.on("connection", function(socket) {
    //user is choosing in which room to connect
    const room = socket.handshake.query.name;
    const jwtToken = socket.handshake.query.jwtToken;
    //we have to verify the token here
    // jtw.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    //   if (!user) {
    //     return next(err);
    //   } else {
    //     //if user is verified we store users.id on the users socket and then next() to let them connect
    //     socket._id = decoded._id;
    //     next();
    //   }
    // });
    console.log(jwtToken);
    console.log(room);
    // Creating a room. Declare function that handles transfers of
    // messages from sender to receiver (user to admin and vice versa)
    socket.on(room, function(msg) {
      console.log("message:" + JSON.stringify(msg));
      //broadcasting to all clients
      io.emit(room, msg);
    });
    // Disconnect from the room
    socket.on("disconnect", function(msg) {
      io.emit("User has left the chat");
    });

    // Joining the room
    socket.join(room);
    // Sending welcome message to the connected user
    io.emit(room, "Welcome to the chat!");
  });

  //Creating different end points on the client side(FOR FRONTEND)
  // const socket = io('/my-namespace');

  // //creating the namespace for assigning different end points
  // const nsp = io.of("/my-namespace");
  // nsp.on("connection", function(socket) {
  //   console.log("message:" + JSON.stringify(msg)); //

  // //when user leaves the chat
  // nsp.on("leave", function(socket) {
  //   console.log("User has left the chat");
  // });

  // const jtw = require("jsonwebtoken");
  // const router = express.Router();

  // io.use((socket, next) => {
  //   const token = socket.handshake.query.token;
  // });

  //receiving and updating messages?
};
