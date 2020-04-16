const { User } = require("../Registration/dbRegistration.js");

module.exports = (server) => {
  const io = require("socket.io")(server);
  // setup connection and events
  io.on("connection", (socket) => {
    console.log("Connection established");

    socket.on("joinRoom", ({ username, room }) => {
      socket.join(room);
      console.log(`${username} join the chat ${room}`)
      User.findOneAndUpdate({ name: username }, { chatRoom: room }).catch(
        (error) => {
          console.log(error);
        }
      );

      // console.log(`User ${username} joined room ${room}`);
      // inform users in the room that a new user joined
      // socket.emit("message", `User ${username} joined room ${room}`);
    });
    socket.on("rooms", (username) => {
      console.log("listOfRooms");
      User.findOne({ isAdministrator: true, name: username }).then((user) => {
        if (user) {
          User.find()
            .select("name")
            .then((users) => {
              io.emit("rooms", users);
            });
        } else {
          io.emit("rooms", [{name:username}]);
        }
      });
    });

    // listen to incoming messages
    socket.on("message", ({ username, msg ,room}) => {
      console.log(`Room ${room}: ${msg} ,${username}`);
      // broadcast ALL - send message to everybody INCLUDING me
      io.to(room).emit("message",{msg, username} );
      // broadcast - send message to everybody EXCLUDING me
      // socket.broadcast.to(room).emit("message", `Room ${room}: ${msg}`)
    });
  });
};
