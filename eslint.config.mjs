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
      "no-unused-expressions": "off",              // JS rule
      "@typescript-eslint/no-unused-expressions": "off", // TS rule
      "no-unused-vars": "off",                     // JS rule
      "@typescript-eslint/no-unused-vars": "off",  // TS rule
      "@typescript-eslint/no-this-alias": "off", // TS rule
      "@typescript-eslint/no-require-imports": "off", // TS rule
      "@typescript-eslint/no-explicit-any": "off", // TS rule
      "@typescript-eslint/no-empty-object-type": "off", // fixed name
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unsafe-function-type": "off", // TS rule
      "@typescript-eslint/no-unnecessary-type-constraints": "off", // TS rule
      "@typescript-eslint/no-unnecessary-type-constraint": "off", // TS rule
      "react/no-unescaped-entities": "off", // React rule
    },
  },
];

export default eslintConfig;
