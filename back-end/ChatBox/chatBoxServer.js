const { User } = require("../Registration/dbRegistration.js");

module.exports = (server) => {
  const io = require("socket.io")(server);
  io.on("connection",(socket) => {
    socket.on("joinRoom",({room,username}) => {
      socket.join(room)
      console.log(`User ${username} joined ${room}`)
      socket.emit("message",`User ${username} joined ${room}`)
  })
  socket.on("message",({room,msg})=>{
    console.log(`Room ${room} :${msg}`)
    io.to(room).emit("message",`Room ${room} :${msg})
  })
  });
};


//handling the connection from the client(frontend)
  // io.on("connection", function (socket) {
  //   //user is choosing in which room to connect
  //   const room = socket.handshake.query.name;
  //   const jwtToken = socket.handshake.query.jwtToken;
  //   //we have to verify the token here
  //   jwt.verify(jwtToken, "jtw-master-secret", (err, decoded) => {
  //     if (err) {
  //       console.log(err);
  //       return err;
  //     } else {
  //       //if user is verified we store users.id on the users socket and then next() to let them connect
  //       socket._isAdministrator = decoded.isAdministrator;
  //       console.log(decoded);
  // const jwt = require("jsonwebtoken");
//       console.log(jwtToken);
  //       console.log(room);
  //       // Creating a room. Declare function that handles transfers of
  //       // messages from sender to receiver (user to admin and vice versa)
  //       socket.on(room, function (msg) {
  //         console.log("message:" + JSON.stringify(msg));
  //         //broadcasting to all clients
  //         io.emit(room, msg);
  //       });

  //       // Disconnect from the room
  //       socket.on("disconnect", function (msg) {
  //         io.emit("User has left the chat");
  //       });

  //       // Joining the room
  //       socket.join(room);
  //       if (!socket._isAdministrator) {
  //         //notify the admin that there is a message from user and in which room
  //         io.emit("userSentMessage", { roomName: room });
  //         // Sending welcome message to the connected user
  //         io.emit(room, "Welcome to the chat!");
  //       }
  //     }
  //   });
  // });
