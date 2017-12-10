// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "promise/catch-or-return": "error",
    "semi": 0,
    "comma-dangle": 0
  },
  globals: {
    ENV: true,
    "jest": true,
    "expect": true,
    "mockFn": true,
    "config": true,
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "runs": true,
    "waitsFor": true,
    "pit": true,
    "require": true,
    "xdescribe": true,
    "xit": true
  }
}