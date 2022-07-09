import type { Join, Vote } from "$models/messages"
import type { Socket } from "socket.io"

export const handleJoin = (message: Join, socket: Socket) => {
    console.log('getting join')
    console.log(message)
    socket.data.room = message.room
}

export const handleVote = (message: Vote, socket: Socket) => {
    console.log('getting vote')
    console.log(message)
    console.log(`client was in room: ${socket.data.room}`)
}
