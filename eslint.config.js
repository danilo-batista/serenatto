import globals from "globals";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      ecmaVersion: 2025,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/node_modules/", ".git/"],
    plugins: {
      prettier: prettier, // A referência do plugin prettier
    },    
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
          endOfLine: "auto",
        },
      ],
    },
  }
];