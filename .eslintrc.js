module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'typescript': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended', // Out of the box Typescript rules
    'standard' // Out of the box StandardJS rules
  ],
  'plugins': [
    '@typescript-eslint' // Let's us override rules below.
  ],
  'rules': {
    '@typescript-eslint/no-use-before-define': 'off', // Allows us to hoist variables and functions which I am a fan of, functions not variables that is.
    '@typescript-eslint/no-explicit-any': 'off', // Too strict for my case, sometimes I need an any type
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', { // Prevents us from using any delimiter for interface properties.
      'multiline': {
        'delimiter': 'none',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    '@typescript-eslint/indent': 'off', // This is the job of StandardJS, they are competing rules so we turn off the Typescript one. 
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '_'
    }],
    'no-undef': 'off', // see: https://github.com/typescript-eslint/typescript-eslint/issues/342
    'node/no-unsupported-features/es-syntax': 'off' // Allows us to use Import and Export keywords.
  }
}
