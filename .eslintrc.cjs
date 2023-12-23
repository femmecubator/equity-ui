module.exports = {
  // Specify the environments where the code will run
  env: {
    jest: true, // Enable Jest for testing
    browser: true, // Enable browser environment
  },

  // Stop ESLint from searching for configuration in parent folders
  root: true,

  // Specify the parser for TypeScript (using @typescript-eslint/parser)
  parser: '@typescript-eslint/parser', // Leverages TS ESTree to lint TypeScript

  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  // Add additional rules and configuration options
  plugins: ['@typescript-eslint'],

  ignorePatterns: ['/dist', '.eslintrc.cjs'],

  // Extend various ESLint configurations and plugins
  extends: [
    'eslint:recommended', // ESLint recommended rules
    'plugin:react/recommended', // React recommended rules
    'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    'plugin:@typescript-eslint/eslint-recommended', // ESLint overrides for TypeScript
    'prettier', // Prettier rules
    'plugin:react-hooks/recommended', // Recommended rules for React hooks
    'plugin:storybook/recommended', // Recommended rules for Storybook
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },

  settings: {
    react: {
      version: '18.2',
    },
  },
};
