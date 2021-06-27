module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'no-use-before-define': 0,
    'explicit-module-boundary-types': 0,
    'import/extensions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-alert': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
