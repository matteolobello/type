import type { AppRouter } from "@api/routes/root.router"

import { createReactQueryHooks } from "@trpc/react"

export const BASE_HOST = "http://localhost:4444"

export const trpc = createReactQueryHooks<AppRouter>()

export const trpcClient = trpc.createClient({
	url: `${BASE_HOST}/trpc`,
	headers: () => {
		return {
			authorization: "INSERT_TOKEN_HERE"
		}
	}
})
