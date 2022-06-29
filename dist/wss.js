// src/ws-server/index.ts
var count = 1;
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("updated: count is now ", newModule.count);
  });
}
var setup = (io) => {
  console.log("socket server started!");
  io.on("connection", (socket) => {
    socket.emit("name", "hello from the server haha! And now it is damn! testing");
  });
};
var kek = () => {
  console.log("kekking");
};
export {
  count,
  kek,
  setup
};
