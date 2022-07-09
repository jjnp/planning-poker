import type { ClientMessage, Join, Vote } from "$models/messages";
import type { Server, Socket } from "socket.io";
import { handleJoin, handleVote } from "./handlers";

export const count = 1

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log('updated: count is now ', newModule.count)
  })
}

const handlers: { [Message in ClientMessage as Message['type']]: (message: Message, socket: Socket) => void } = {
  join: handleJoin,
  vote: handleVote,
  "change-settings": (message, socket) => {},
  "clear-history": (message, socket) => {},
  "next-round": (message, socket) => {},
  fetch: (message, socket) => {},
  leave: (message, socket) => {},
  reveal: (message, socket) => {},
}

export const setup = (io: Server) => {

    console.log('socket server started!')

    io.on('connection', (socket) => {
        socket.emit('name', 'hello from the server haha! And now it is damn! testing')
        Object.entries(handlers).forEach(([eventName, handlerFn]) => socket.on(eventName, (event) => handlerFn(event, socket)))
    })
}


