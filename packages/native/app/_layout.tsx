import {
	type StackNavigationOptions,
	createStackNavigator
} from "@react-navigation/stack"

import { withLayoutContext } from "expo-router"

import { ClientProvider } from "../client/trpc-client"

const { Navigator } = createStackNavigator()

export const StackNavigation = withLayoutContext<
	StackNavigationOptions,
	typeof Navigator
>(Navigator)

export default function HomeLayout() {
	return (
		<ClientProvider>
			<StackNavigation />
		</ClientProvider>
	)
}
