module.exports = {
  extends: "eslint-config-airbnb-base",
  rules: {
    "no-console": 1,
    'import/prefer-default-export': 0
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
