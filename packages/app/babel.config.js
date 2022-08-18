const hq = require("alias-hq")

// Convert Webpack Alias HQ config to Babel config
const webpackAliasConfig = hq.get("webpack")
const aliasKeys = Object.keys(webpackAliasConfig)
const alias = {}
aliasKeys.forEach((key) => {
	const path = webpackAliasConfig[key]
	const [_, relative] = path.split("/packages/")
	alias[key] = `../../packages/${relative}`
})

module.exports = (api) => {
	api.cache(true)
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias
				}
			]
		]
	}
}
