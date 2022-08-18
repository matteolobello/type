import type { AppRouter } from "@api/routes/root.router"

import { createReactQueryHooks } from "@trpc/react"

export const BASE_HOST = "https://fcb5-95-239-237-127.eu.ngrok.io"

export const trpc = createReactQueryHooks<AppRouter>()

export const trpcClient = trpc.createClient({
	url: `${BASE_HOST}/trpc`,
	headers: () => {
		return {
			authorization: "INSERT_TOKEN_HERE"
		}
	}
})
