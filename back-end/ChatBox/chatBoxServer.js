const { User } = require("../Registration/dbRegistration.js");

module.exports = (server) => {
  const io = require("socket.io")(server);
  // setup connection and events
  io.on("connection", (socket) => {
    console.log("Connection established");
    socket.on("joinRoom", ({ room, username }) => {
      socket.join(room);
      console.log(`User ${username} joined room ${room}`);
      // inform users in the room that a new user joined
      socket.emit("message", `User ${username} joined room ${room}`);
    });
    // listen to incoming messages
    socket.on("message", ({ room, msg }) => {
      console.log(`Room ${room}: ${msg}`);
      // broadcast ALL - send message to everybody INCLUDING me
      io.to(room).emit("message", `Room ${room}: ${msg}`);
      // broadcast - send message to everybody EXCLUDING me
      // socket.broadcast.to(room).emit("message", `Room ${room}: ${msg}`)
    });
    socket.on("rooms", (userId) => {
      console.log("listOfRooms");
      User.find({ chat: true })
        .select(["name", "_id", "chat", "chatRoom"])
        .then((users) => {
          io.emit("message", users);
        });
    });
  });
};
