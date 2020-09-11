module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		"jest/globals": true,
	},
	extends: [
		"plugin:vue/recommended",
		"eslint:recommended",
		"prettier/vue",
		"plugin:prettier/recommended",
		"plugin:jest/all",
	],
	rules: {
		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	plugins: ["jest"],
};
