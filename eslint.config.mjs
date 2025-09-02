import nextPlugin from "@eslint/js";
import nextConfig from "eslint-config-next";

export default [
  nextPlugin.configs.recommended,
  ...nextConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
