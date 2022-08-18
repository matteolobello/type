import { useCallback } from "react"
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native"

import { StatusBar } from "expo-status-bar"

import tw from "@app/tailwind/tw"

import logo from "@assets/images/logo.png"

import { useReplaceRoute } from "../../hooks/useNavigation"

const Login = () => {
	const replaceRoute = useReplaceRoute()

	const handleViewHomeScreen = useCallback(() => {
		replaceRoute("Home")
	}, [replaceRoute])

	return (
		<SafeAreaView
			style={tw`w-full h-full flex flex-col justify-between items-center text-center`}
		>
			<StatusBar style="auto" />
			<ScrollView style={tw`w-full max-w-[600px] p-4`}>
				<KeyboardAvoidingView
					keyboardVerticalOffset={Platform.select({
						ios: 108,
						android: 0,
						web: 0
					})}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<View>
						<View style={tw`w-full h-[100px] px-4`}>
							<Image
								style={tw`w-full h-full`}
								source={logo}
								resizeMode="contain"
							/>
						</View>
						<Text style={tw`text-lg mt-8 mb-4 text-center`}>
							Sign in to continue
						</Text>
						<TextInput
							placeholder="Email"
							keyboardType="email-address"
							style={tw`w-full h-[48px] bg-white px-2 mt-2 rounded-lg`}
						/>
						<TextInput
							placeholder="Password"
							keyboardType="visible-password"
							style={tw`w-full h-[48px] bg-white px-2 mt-2 rounded-lg`}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
			<View style={tw`w-full flex justify-center items-center px-4 mb-4`}>
				<TouchableOpacity
					style={tw`w-full max-w-[600px] h-[56px] flex justify-center bg-blue-700 rounded-lg mt-2`}
					onPress={handleViewHomeScreen}
				>
					<Text style={tw`text-white text-center text-2xl font-bold`}>
						Continue →
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default Login
