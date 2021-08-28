module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 12,
		sourceType: `module`,
	},
	rules: {
		indent: [`error`, `tab`],
		"linebreak-style": [`error`, `unix`],
		quotes: [`error`, `backtick`],
		semi: [`error`, `never`],
	},
	extends: [`eslint:recommended`, `prettier`],
}
