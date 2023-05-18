import { Button, Text, View } from "react-native"

import { Stack, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function Details() {
	const router = useRouter()

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Stack.Screen options={{ title: "Details" }} />
			<StatusBar style="auto" />

			<Text className="mb-2 text-2xl font-bold">
				This is the details page 👋
			</Text>
			<Button onPress={() => router.back()} title="Go back" />
		</View>
	)
}
