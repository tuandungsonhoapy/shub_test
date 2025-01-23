import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			'react/prop-types': 0,
			'react/display-name': 0,
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			'no-restricted-imports': [
				'error',
				{
					patterns: ['@mui/*/*/*']
				}
			],
			'no-console': 1,
			'no-lonely-if': 1,
			'no-unused-vars': 1,
			'no-trailing-spaces': 1,
			'no-multi-spaces': 1,
			'no-multiple-empty-lines': 1,
			'space-before-blocks': ['error', 'always'],
			'object-curly-spacing': [1, 'always'],
			indent: ['warn', 2],
			semi: [1, 'never'],
			quotes: ['error', 'single'],
			'array-bracket-spacing': 1,
			'linebreak-style': 0,
			'no-unexpected-multiline': 'warn',
			'keyword-spacing': 1,
			'comma-dangle': 1,
			'comma-spacing': 1,
			'arrow-spacing': 1
		}
	}
)
