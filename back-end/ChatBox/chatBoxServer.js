const { User } = require("../Registration/dbRegistration.js");
// const jwt = require("jsonwebtoken");
module.exports = (server) => {
  const io = require("socket.io")(server);
  io.on("connection",(socket) => {
    socket.on("joinRoom",({room,username})) => {
      socket.join(room)
      console.log(`User ${username} joined ${room}`)
      socket.emit("message",`User ${username} joined ${room}`)
    }
  });
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
  //       // user token
  //       //  "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Y1Y2Y3NTA1MTlhMTlhZWRhNjI1MCIsInBhc3N3b3JkIjoiJDJiJDEwJFN6VVplenFIRUJxckE4SGVYZFVWaGVXck9XUXdILng4SDFYQkgub0VaTnVGZHBoYXYwamV1IiwiaXNBZG1pbmlzdHJhdG9yIjpmYWxzZSwiaWF0IjoxNTg2MjQzNTg3LCJleHAiOjE1ODYyNTA3ODd9.DHKagwSWMQpE44M16r4Hx3mvi-hr0p7Fbswum_nlONE"

  //       // admin token
  //       //     "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Y1ZmZkNTA1MTlhMTlhZWRhNjI1MSIsInBhc3N3b3JkIjoiJDJiJDEwJG1xTUREUEU2Y1ZDVnFQQ0t5Q2FXRnVkUTc2VnBxZHEvcGMyaWR3NjFGNjc1VC9ZRGNGenlXIiwiaXNBZG1pbmlzdHJhdG9yIjp0cnVlLCJpYXQiOjE1ODYyNDM3MjIsImV4cCI6MTU4NjI1MDkyMn0.1oIXrdK1DZ_1fW4qonwaZj3b4fTAAECUCCYpac5TJI0"

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
};

//the admin should only be the one creates the channel to connect and chat with someone
