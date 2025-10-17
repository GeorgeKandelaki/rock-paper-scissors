import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx}"],
        extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-use-before-define": "error",
            "react-refresh/only-export-components": "off",
            "default-param-last": "warn",
            "block-scoped-var": "error",
            "react/jsx-uses-vars": "warn",
            "react/jsx-uses-react": "off",
            "react/no-unescaped-entities": "off",
            "react/prop-types": "off",
        },
    },
]);
