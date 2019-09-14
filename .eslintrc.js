module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
  ],
  "plugins": ["@typescript-eslint/eslint-plugin"],
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "typescript": true
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": [2, {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true,
      "allowHigherOrderFunctions": true,
    }],
    "@typescript-eslint/no-unused-vars": [2, {
      "argsIgnorePattern": "_"
    }]
  }
}