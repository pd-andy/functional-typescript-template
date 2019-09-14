module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser':  '@typescript-eslint/parser',
  'extends':  [
    'plugin:@typescript-eslint/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ]
  }
}