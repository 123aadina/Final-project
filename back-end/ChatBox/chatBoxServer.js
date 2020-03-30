const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(server);
const users = {};

//setting connection between server and client
io.on("connection", function(socket) {
  console.log("User is connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    //sending to all clients
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

//sto chatbox tha mporei o kathenas na milisei me kapoion i tha prepei na einai eggegramenos xristis?
//socket must listen to an event called connection
//xreiazomai routes? i afou exoume to socket den xreiazomaste kati allo?
