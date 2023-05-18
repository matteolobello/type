import { useEffect, useState } from "react"

import { SplashScreen, Stack, useRouter } from "expo-router"

export default function Splash() {
	const router = useRouter()

	const [unmountSplashScreen, setUnmountSplashScreen] = useState<boolean>(false)

	useEffect(() => {
		// Perform some sort of async data or asset fetching.
		setTimeout(() => {
			router.replace("/home")

			setUnmountSplashScreen(true)
		}, 1000)
	}, [router])

	return (
		<>
			<Stack.Screen options={{ headerShown: false, animation: "fade" }} />
			{!unmountSplashScreen && <SplashScreen />}
		</>
	)
}
