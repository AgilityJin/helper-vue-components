module.exports = {
  root: true,
  env: {
    browser: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'never',
      'endTag': 'never'
    }]
  }
}
