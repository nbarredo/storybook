module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "standard",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  ignorePatterns: ["*.test.js", "*.stories.js"],
  rules: {
    semi: [2, "always"],
    quotes: ["error", "double"],
    "react/prop-types": 0
  }
};
