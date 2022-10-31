export default {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "tsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "no-console": "warn",
    "import/first": "error",
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  }
}
