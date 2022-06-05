<script lang="ts">
import { onMount } from "svelte";
import { io } from 'socket.io-client'


    onMount(() => {
        const socket = io()

        socket.on('name', (name: string) => {
            messages = [...messages, name]
        })
    })

    let messages: string[] = []
</script>

<h1>Websocket server</h1>
<p>Messages:</p>
{#each messages as m, index}
<p>{index}: {m}</p>
{/each}
