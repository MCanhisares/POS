module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react-native/all'],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react-native/no-raw-text': 'off',
    'no-tabs': 0,
    'no-restricted-imports': 'off',    
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'no-console': 'error',
  },
  globals: {
    JSX: true,
  },
};
