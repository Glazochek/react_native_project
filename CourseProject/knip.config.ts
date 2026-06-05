import { type KnipConfiguration } from "knip";

const config: KnipConfiguration = {
  $schema: "https://unpkg.com/knip@6/schema.json",
  ignoreFiles: ["babel.config.cjs"],
  ignoreDependencies: ["expo-updates", "eslint-plugin-import"],
};

export default config;
