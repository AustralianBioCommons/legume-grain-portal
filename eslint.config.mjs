import { fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["node_modules/**", "out/**", ".next/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      "react-hooks": fixupPluginRules(reactHooks),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "react/prop-types": "off",
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
