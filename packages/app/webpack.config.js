const { createWebpackConfigAsync } = require("expo-yarn-workspaces/webpack")

module.exports = async (env, argv) => {
	const config = await createWebpackConfigAsync(env, argv)
	return config
}
