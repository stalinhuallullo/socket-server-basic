const Server = require("./models/server");
require("dotenv").config()
const server = new Server();
server.execute();


/**
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(express.static(__dirname+"/public"))

io.on("connection", ( socket ) => {

  // Consumer
  socket.on("mensaje-to-server", (data) => {
    //socket.emit("mensaje-from-server", data)
    io.emit("mensaje-from-server", data)
  })
  
});
server.listen(3000, () => {
  console.log("El puerto es 3000");
});

 
 */