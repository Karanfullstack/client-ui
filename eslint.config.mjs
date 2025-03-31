import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    // {
    //     plugins: {
    //         "@typescript-eslint": import("@typescript-eslint/eslint-plugin"),
    //     },
    //     rules: {
    //         // "no-unused-vars": "on", // Disable the base rule
    //         "@typescript-eslint/no-unused-vars": [
    //             "warn",
    //             {
    //                 varsIgnorePattern: "^_", // Ignore variables starting with _
    //                 argsIgnorePattern: "^_", // Ignore function arguments starting with _
    //                 caughtErrorsIgnorePattern: "^_", // Ignore catch clause parameters starting with _
    //                 ignoreRestSiblings: true, // Ignore unused destructured siblings
    //             },
    //         ],
    //     },
    // },
];

export default eslintConfig;
