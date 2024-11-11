module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["airbnb-base", "airbnb-typescript/base", "plugin:prettier/recommended"],
      "rules": {
        "no-param-reassign": "off",
        "max-classes-per-file": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "no-use-before-define": ["warn", { "functions": false, "classes": false }],
        "@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": false }],
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true
            }
          }
        ],
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-underscore-dangle": ["error", { "allow": ["_cursor", "_limit", "_sort", "_fields"] }],
        // "no-useless-constructor": "off",
        // "no-empty-function": "off",
        // '@typescript-eslint/interface-name-prefix': 'off',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'off',
      }
    },
    {
      "files": ["*.entity.ts", "*.repository.ts"],
      "extends": [],
      "rules": {
        "import/no-cycle": "off"
      }
    },
  ]
};
