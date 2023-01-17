import { ClientProvider } from "../client/trpc-client"
import "../styles/globals.css"

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
