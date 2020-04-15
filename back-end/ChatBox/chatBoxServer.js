const { User } = require("../Registration/dbRegistration.js");

module.exports = (server) => {
  const io = require("socket.io")(server);
  // setup connection and events
  io.on("connection", (socket) => {
    console.log("Connection established");

    socket.on("joinRoom", ({ username }) => {
      socket.join(room);
      User.findOneAndUpdate({ name: username }, { chatRoom: username }).catch(
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
              io.emit("rooms", [user]);
            });
        } else {
          io.emit("rooms", [username]);
        }
      });
    });

    // listen to incoming messages
    socket.on("message", ({ username, msg }) => {
      console.log(`Room ${username}: ${msg}`);
      // broadcast ALL - send message to everybody INCLUDING me
      io.to(username).emit("message", msg);
      // broadcast - send message to everybody EXCLUDING me
      // socket.broadcast.to(room).emit("message", `Room ${room}: ${msg}`)
    });
  });
};
