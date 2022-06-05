import adapter from '@sveltejs/adapter-node';
import { Server } from 'socket.io';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				{
					name: 'sveltekit-socket-io',
					configureServer: (server) => {
						const io = new Server(server.httpServer)
						console.log('socket server started')

						io.on('connection', (socket) => {
							socket.emit('name', 'hello from the server')
						})
					}
				}
			]
		}
	}
};

export default config;
