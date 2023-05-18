import React, { useState } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "api/trpc/routes"
import { API_URL } from "config/api"

export const trpc = createTRPCReact<AppRouter>()

let authToken: string | undefined = undefined

export function ClientProvider(props: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: `${API_URL}/trpc`,
					headers() {
						return !authToken
							? {}
							: {
									authorization: `Bearer ${authToken}`
							  }
					}
				})
			]
		})
	)

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{props.children}
			</QueryClientProvider>
		</trpc.Provider>
	)
}

export const saveAuthToken = (token: string) => {
	authToken = token
}

export const clearAuthToken = () => {
	authToken = undefined
}
