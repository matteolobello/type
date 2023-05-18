"use client"

import { useState } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "api/trpc/routes"
import { API_URL } from "config/api"

export const trpc = createTRPCReact<AppRouter>({
	// eslint-disable-next-line camelcase
	unstable_overrides: {
		useMutation: {
			async onSuccess(opts) {
				await opts.originalFn()
				await opts.queryClient.invalidateQueries()
			}
		}
	}
})

export function ClientProvider(props: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				loggerLink({
					enabled: () => true
				}),
				httpBatchLink({
					url: `${API_URL}/trpc`
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
