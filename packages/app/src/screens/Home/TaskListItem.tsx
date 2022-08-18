import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import type { Task } from "@api/prisma"

import { trpc } from "@app/clients/trpc"
import Divider from "@app/components/Divider/Divider"
import { useNavigation } from "@app/hooks/useNavigation"
import tw from "@app/tailwind/tw"

const TaskListItem = (task: Task) => {
	const navigation = useNavigation()

	const trpcContext = trpc.useContext()

	const deleteTaskMutation = trpc.useMutation("tasks.delete", {
		onSuccess() {
			trpcContext.invalidateQueries(["tasks.all"])
		}
	})

	return (
		<View>
			<View style={tw`w-full flex-row items-center justify-around p-4`}>
				<TouchableOpacity
					style={tw`w-full flex-1`}
					onPress={() => navigation.push("Task", { id: task.id })}
				>
					<Text style={tw`text-xl`}>{task.title}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						deleteTaskMutation.mutateAsync({ where: { id: task.id } })
					}
				>
					<Text>❌</Text>
				</TouchableOpacity>
			</View>

			<Divider />
		</View>
	)
}

export default TaskListItem
