// src/ws-server/index.ts
var setup = (io) => {
  console.log("socket server started");
  io.on("connection", (socket) => {
    socket.emit("name", "hello from the server");
  });
};
var kek = () => {
  console.log("kekking");
};
export {
  kek,
  setup
};
