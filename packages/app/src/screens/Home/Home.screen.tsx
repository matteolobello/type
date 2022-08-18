import { useEffect, useState } from "react"
import { Button, FlatList, View } from "react-native"

import { StatusBar } from "expo-status-bar"

import { trpc } from "@app/clients/trpc"
import InputModal from "@app/components/InputModal/InputModal"
import { useNavigation } from "@app/hooks/useNavigation"
import tw from "@app/tailwind/tw"

import TaskListItem from "./TaskListItem"

const Home = () => {
	const navigation = useNavigation()

	const trpcContext = trpc.useContext()
	const [createTaskDialogVisible, setCreateTaskDialogVisible] =
		useState<boolean>(false)

	const { data } = trpc.useQuery(["tasks.all", {}])
	const createTaskMutation = trpc.useMutation("tasks.create", {
		onSuccess() {
			trpcContext.invalidateQueries(["tasks.all"])
		}
	})

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					title="Add"
					onPress={() => {
						setCreateTaskDialogVisible(true)
					}}
				/>
			)
		})
	}, [navigation])

	return (
		<View style={tw`w-full h-full`}>
			<StatusBar style="auto" />

			<FlatList
				data={data}
				style={tw`w-full h-full`}
				renderItem={({ item }) => <TaskListItem {...item} />}
				keyExtractor={(item) => `task-${item.id}`}
			/>

			<InputModal
				visible={createTaskDialogVisible}
				onSubmit={(input) => {
					if (input) {
						setCreateTaskDialogVisible(false)

						createTaskMutation.mutate({
							title: input
						})
					}
				}}
				onCancel={() => setCreateTaskDialogVisible(false)}
			/>
		</View>
	)
}

export default Home
