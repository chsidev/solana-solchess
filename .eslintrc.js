module.exports = {
  // eslint-disable-line import/no-commonjs
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
  },
  rules: {
    "no-trailing-spaces": ["error"],
    "import/first": ["error"],
    "import/no-commonjs": ["error"],
    "import/order": [
      "error",
      {
        groups: [
          ["internal", "external", "builtin"],
          ["index", "sibling", "parent"],
        ],
        "newlines-between": "always",
      },
    ],
    indent: [
      "error",
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "no-console": [0],
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "require-await": ["error"],
    semi: ["error", "always"],
  },
};
# Change 0 on 2024-01-24
