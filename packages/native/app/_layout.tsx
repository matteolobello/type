import { Slot } from "expo-router"

import { ClientProvider } from "../client/trpc-client"

export default function HomeLayout() {
	return (
		<ClientProvider>
			<Slot />
		</ClientProvider>
	)
}
