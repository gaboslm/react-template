module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		project: 'tsconfig.json',
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/comma-dangle': [
			'warn',
			{
				objects: 'always-multiline',
				arrays: 'always-multiline',
				imports: 'always-multiline',
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
