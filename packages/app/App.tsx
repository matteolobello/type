import { QueryClientProvider } from "react-query"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { queryClient } from "@app/clients/query"
import { trpc, trpcClient } from "@app/clients/trpc"
import Home from "@app/screens/Home/Home.screen"
import Login from "@app/screens/Login/Login.screen"
import Task from "@app/screens/Task/Task.screen"
import { RootStackParamList } from "@app/types/RootStackParamList"

import tw, { useDeviceContext } from "twrnc"

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
	useDeviceContext(tw)

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Task" component={Task} />
					</Stack.Navigator>
				</NavigationContainer>
			</QueryClientProvider>
		</trpc.Provider>
	)
}

export default App
