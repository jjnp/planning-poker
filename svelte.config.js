import adapter from '@sveltejs/adapter-node';
import { Server } from 'socket.io';
import { resolve } from 'path'
import preprocess from 'svelte-preprocess';
import fs from 'fs'

function touch(path) {
	const time = new Date()
  
	try {
	  fs.utimesSync(path, time, time)
	}
	catch (err) {
	  fs.closeSync(fs.openSync(path, 'w'))
	}
  }

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/styles/_mixins.scss';`
		},
		postcss: true
	}),

	kit: {
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
					$wss: resolve('src/ws-server'),
					
				$assets: resolve('static'),
				$styles: resolve('src/styles')
				}
			},
		adapter: adapter(),
		plugins: [
				{
					name: 'something',
					configureServer: async (server) => {
						server.watcher.add(['dist/*'])
						server.watcher.on('change', (file) => {
							console.log(`got change: ${file}`)
							if (file.includes('dist')) {
								console.log('sending change')
								let io = new Server(server.httpServer)
								server.ssrLoadModule('./dist/wss.js').then(({ setup }) => {

									setup(io)
									server.ws.send({ type: 'full-reload' })
								})

								// import('./dist/wss.js').then(({ setup }) => {
								// 	// io.close()
								// 	io = new Server(server.httpServer)
								// 	setup(io)
								// }).then(() => {
								// 	server.ws.send({ type: 'full-reload' })
								// })
								// touch('svelte.config.js')
							}
						})
					}
				}
			]
		}
	}
};

export default config;
