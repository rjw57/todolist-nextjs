import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { stylistic },
    rules: {
      "stylistic/max-len": [
        "error",
        {
          code: 100,
          tabWidth: 2,
          // To allow for long JSX properties.
          ignoreStrings: true,
        },
      ],
      indent: ["error", 2],
    },
  },
];

export default eslintConfig;
