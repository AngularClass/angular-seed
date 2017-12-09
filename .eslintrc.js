module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'promise'
  ],
  // add your custom rules here
  rules: {
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