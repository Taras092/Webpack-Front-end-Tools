module.exports = {
  extends: "eslint-config-airbnb-base",
  rules: {
    "no-console": 1,
    eqeqeq: 2,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
  },
  env: {
      browser: true,
  },
  globals: {
      document: true,
      alert: true,
  }
};
