module.exports = {
	tabWidth: 2,
	useTabs: true,
	semi: false,
	trailingComma: "none",
	importOrder: [
		"^react*",
		"@react*",
		"^expo*",
		"<THIRD_PARTY_MODULES>",
		"^native/*",
		"^web/*",
		"^./*"
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: [
		require("@trivago/prettier-plugin-sort-imports"),
		require("prettier-plugin-tailwindcss")
	]
}
