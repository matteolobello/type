import { ClientProvider } from "../client/trpc-client"
import "../styles/globals.css"
import { type Metadata } from "next"

export const metadata: Metadata = {
	title: "TYPE",
	description: "Fully-typed stack for your next project"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	)
}
