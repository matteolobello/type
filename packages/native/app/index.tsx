import { Button, Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

export default function Home() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<StatusBar style="auto" />

			<Text className="mb-5 text-2xl font-bold">Hello from Expo 👋</Text>
			<Button onPress={() => alert("Pressed!")} title="Sample button" />
		</View>
	)
}
