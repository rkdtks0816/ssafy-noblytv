module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb', // airbnb-javascript style guide
    'airbnb-typescript', // airbnb-typescript style guide
    'airbnb/hooks', // React 훅 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 플러그인의 기본 권장 사항
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'],
  },
};
