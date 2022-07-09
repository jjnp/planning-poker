<script lang="ts">
import { onMount } from "svelte";
import { io, Socket } from 'socket.io-client'
import type { Fibonacci, VotingRange } from "$models/voting";
import type { Join, Vote } from "$models/messages";
import type { UserId } from "$models/user";

    let socket: Socket

    onMount(() => {
        socket = io()

        socket.on('name', (name: string) => {
            messages = [...messages, name]
        })
    })

    let kek: Join

    let messages: string[] = []
    let vote: VotingRange['options']
    let room: string

    const joinRoom = () => {
        const event: Join = {
            type: 'join',
            room,
            user: {
                id: 'asdf' as UserId,
                username: 'jjnp',
                observer: false
            }
        }
        socket.emit(event.type, event)
    }

    const doVote = () => {
        const event: Vote = {
            type: 'vote',
            selection: vote
        }
        socket.emit(event.type, event)
    }
</script>

<h1>Websocket server</h1>
<p>Messages:</p>
{#each messages as m, index}
<p>{index}: {m}</p>
{/each}

<label>Room:</label>
<input bind:value={room}/>
<button on:click={joinRoom}>Join Room</button>
<br/>
<br/>
<label>Vote:</label>
<input bind:value={vote} />
<button on:click={doVote}>send vote</button>
