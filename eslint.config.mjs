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
    {
        rules: {
            // Customizing the unused-vars rule for TypeScript
            "@typescript-eslint/no-unused-vars": [
                "error", // Enforce error for unused variables
                {
                    varsIgnorePattern: "^_", // Ignore variables starting with an underscore
                    argsIgnorePattern: "^_", // Ignore function arguments starting with an underscore
                    caughtErrorsIgnorePattern: "^_", // Ignore catch clause parameters starting with an underscore
                    ignoreRestSiblings: true, // Ignore unused destructured siblings
                },
            ],
        },
    },
];

export default eslintConfig;
