module.exports = {
	extends: ["next", "prettier", "next/core-web-vitals"],
	plugins: ["prettier"],
	settings: {
		next: {
			rootDir: ["packages/*/"]
		}
	},
	rules: {
		"@next/next/no-html-link-for-pages": "off",
		"prettier/prettier": ["error"],
		"no-unused-vars": "error",
		"prefer-const": "error",
		"no-irregular-whitespace": "error",
		"no-trailing-spaces": "error",
		"no-empty-function": "error",
		"no-duplicate-imports": "error",
		"newline-after-var": "error",
		camelcase: "error"
	}
}
