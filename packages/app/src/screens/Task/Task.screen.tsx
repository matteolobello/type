import { ScrollView, Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

import { trpc } from "@app/clients/trpc"
import { useRouteParams } from "@app/hooks/useNavigation"
import tw from "@app/tailwind/tw"

const Task = () => {
	const params = useRouteParams("Task")

	const { data } = trpc.useQuery(["tasks.get", { id: params?.id }])

	return (
		<View style={tw`min-h-full bg-blue-400`}>
			<StatusBar style="auto" />
			<ScrollView
				contentContainerStyle={tw`w-full min-h-full flex justify-center items-center p-8`}
			>
				<Text selectable style={tw`text-3xl text-center font-bold`}>
					{data?.title}
				</Text>
			</ScrollView>
		</View>
	)
}

export default Task
