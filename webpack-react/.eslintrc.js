// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module',    
      allowImportExportEverywhere: true,
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
      es6: true,
      commonjs: true,
      browser: true,
    },
    extends: [
      // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
      'standard',
      // https://github.com/feross/eslint-config-standard-react
      'standard-react'
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    plugins: [
      'react',
      'babel',
      'promise'
    ],
    // add your custom rules here
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'spaced-comment': 0,
      'space-before-function-paren': 'off',
      'padded-blocks': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-bind': 'off',
      "react/no-unused-prop-types": "off",
      "react/react-in-jsx-scope": 'off',
      "react/jsx-indent": 'off',
      'jsx-quotes': 'off',
      'indent': 'off',
      'no-callback-literal': 0,
      "object-curly-spacing": [2, "always"]
    }
  }
  