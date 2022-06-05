import adapter from '@sveltejs/adapter-node';
import { Server } from 'socket.io';
import { resolve } from 'path'
import preprocess from 'svelte-preprocess';
// import { kek } from './src/ws-server/index'
import { test } from 'src/ws-server/kek'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$i18n: resolve('src/i18n'),
					$models: resolve('src/models'),
					'$secrets/client': resolve('src/secrets.client'),
					'$secrets/server': resolve('src/secrets.server'),
					$utils: resolve('src/utils'),
					$state: resolve('src/state'),
					$wss: resolve('src/ws-server')
				}
			},
			plugins: [
				{
					name: 'sveltekit-socket-io',
					configureServer: (server) => {
						const io = new Server(server.httpServer)
						// setup(io)
						// kek()
						test()
					}
				}
			]
		}
	}
};

export default config;
