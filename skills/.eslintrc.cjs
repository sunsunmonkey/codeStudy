module.exports ={
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "@typescript-eslint",
      "react-hooks",
      "simple-import-sort",
      "import",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        "error",
        {},
        {
          "usePrettierrc": false
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-var-requires": 0,
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "react/prop-types": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            [
              "^\\u0000"
            ],
            [
              "^react$",
              "^@?\\w"
            ],
            [
              "^[^.]"
            ],
            [
              // ../whatever/
              "^\\.\\./(?=.*/)",
              // ../
              "^\\.\\./",
              // ./whatever/
              "^\\./(?=.*/)",
              // Anything that starts with a dot
              "^\\.",
              // .html are not side effect imports
              "^.+\\.html$"
            ],
            [
              "^(./|../).*.s?css$"
            ]
          ]
        }
      ]
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
  
