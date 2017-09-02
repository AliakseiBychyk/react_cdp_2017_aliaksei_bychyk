module.exports={
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": 'module'
  },
  "plugins": ["react"],
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": ["warn", { "allow": ["info", "error"] }],
    "react/prop-types": [
      "error",
      {
        "ignore": [
          "children",
          "params"
        ]
      }
    ]
  }
};