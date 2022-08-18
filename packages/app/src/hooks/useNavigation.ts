import {
	CommonActions,
	RouteProp,
	useNavigation as useRNNavigation,
	useRoute
} from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { RootStackParamList } from "@app/types/RootStackParamList"

export const useNavigation = () => {
	return useRNNavigation<NativeStackNavigationProp<RootStackParamList>>()
}

export const useRouteParams = <R extends keyof RootStackParamList>(_: R) => {
	const { params } = useRoute<RouteProp<RootStackParamList, R>>()
	return params
}

export const useReplaceRoute = () => {
	const navigation = useNavigation()

	const replaceRoute = <R extends keyof RootStackParamList>(
		name: R,
		params?: RootStackParamList[R]
	) => {
		if (name) {
			const currentState = navigation.getState()
			return navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routeNames: [...currentState.routeNames],
					routes: [
						{
							name,
							params
						}
					]
				})
			)
		}
	}

	return replaceRoute
}
