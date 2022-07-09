// src/ws-server/handlers.ts
var handleJoin = (message, socket) => {
  console.log("getting join");
  console.log(message);
  socket.data.room = message.room;
};
var handleVote = (message, socket) => {
  console.log("getting vote");
  console.log(message);
  console.log(`client was in room: ${socket.data.room}`);
};

// src/ws-server/index.ts
var count = 1;
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("updated: count is now ", newModule.count);
  });
}
var handlers = {
  join: handleJoin,
  vote: handleVote,
  "change-settings": (message, socket) => {
  },
  "clear-history": (message, socket) => {
  },
  "next-round": (message, socket) => {
  },
  fetch: (message, socket) => {
  },
  leave: (message, socket) => {
  },
  reveal: (message, socket) => {
  }
};
var setup = (io) => {
  console.log("socket server started!");
  io.on("connection", (socket) => {
    socket.emit("name", "hello from the server haha! And now it is damn! testing");
    Object.entries(handlers).forEach(([eventName, handlerFn]) => socket.on(eventName, (event) => handlerFn(event, socket)));
  });
};
export {
  count,
  setup
};
