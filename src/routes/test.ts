import type { RequestHandler } from "@sveltejs/kit"


export const get: RequestHandler<{text: string}> = () => {
    return {
        body: {
            text: 'some text !!!'
        }
    }
}

