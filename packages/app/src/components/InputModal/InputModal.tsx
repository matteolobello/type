import React, { useCallback, useState } from "react"
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native"

import tw from "@app/tailwind/tw"

type InputModalProps = {
	visible?: boolean
	alertDescription?: string
	inputLabel?: string
	onCancel?: () => void
	onSubmit?: (input?: string) => void
}

const InputModal = ({
	visible,
	inputLabel,
	onCancel,
	onSubmit
}: InputModalProps) => {
	const [input, setInput] = useState<string>()

	const handleCancel = useCallback(() => {
		if (onCancel) {
			setInput(undefined)
			onCancel?.()
		}
	}, [onCancel, setInput])

	const handleSubmit = useCallback(() => {
		if (onSubmit) {
			setInput(undefined)
			onSubmit?.(input)
		}
	}, [onSubmit, input, setInput])

	return (
		<View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={visible}
				onRequestClose={handleCancel}
			>
				<View
					style={tw`flex-1 justify-center items-center bg-black bg-opacity-30`}
				>
					<View
						style={tw`w-3/4 max-w-[600px] m-4 bg-white rounded-md p-8 shadow-md`}
					>
						<TouchableOpacity onPress={handleCancel}>
							<Text style={tw`underline`}>Close</Text>
						</TouchableOpacity>
						<Text style={tw`my-5 font-bold text-2xl`}>Insert new task</Text>
						<TextInput
							style={tw`text-xl px-1 py-1 rounded-md border border-blue-200`}
							placeholder={inputLabel}
							value={input}
							onChange={(e) => setInput(e.nativeEvent.text)}
						/>
						<TouchableOpacity style={tw`rounded-sm`} onPress={handleSubmit}>
							<Text style={tw`text-lg text-center mt-4 underline`}>Create</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default InputModal
