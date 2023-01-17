module.exports = {
	extends: ["next", "prettier"],
	settings: {
		next: {
			rootDir: ["packages/*/"]
		}
	}
}
