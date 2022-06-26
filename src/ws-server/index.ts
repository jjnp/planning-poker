import type { Server } from "socket.io";



export const setup = (io: Server) => {


    console.log('socket server started!')

    io.on('connection', (socket) => {
        socket.emit('name', 'hello from the server haha! And now it is damn!')
    })
}

export const kek = () => {
    console.log('kekking')
}