import type { Server } from "socket.io";

export const count = 1

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log('updated: count is now ', newModule.count)
  })
}


export const setup = (io: Server) => {


    console.log('socket server started!')

    io.on('connection', (socket) => {
        socket.emit('name', 'hello from the server haha! And now it is damn! testing')
    })
}

export const kek = () => {
    console.log('kekking')
}