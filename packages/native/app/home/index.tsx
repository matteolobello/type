import { ActivityIndicator, Button, Text, View } from "react-native"

import { Stack, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { trpc } from "native/client/trpc-client"

export default function Home() {
	const router = useRouter()

	const { data, isLoading } = trpc.sample.hello.useQuery({ name: "World" })

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Stack.Screen options={{ title: "Home" }} />
			<StatusBar style="auto" />

			<Text className="mb-3 text-2xl font-bold">TYPE – Expo 👋</Text>

			<Text className="mb-1 text-lg">Data from API:</Text>
			<View className="mb-5 overflow-hidden rounded-md bg-gray-200 p-4">
				{isLoading ? (
					<ActivityIndicator size="small" color="black" />
				) : (
					<Text className="rounded-md text-lg font-bold">
						{data?.greeting ?? "No response"}
					</Text>
				)}
			</View>

			<Button
				onPress={() => router.push("/details")}
				title="Go to details screen"
			/>
		</View>
	)
}
