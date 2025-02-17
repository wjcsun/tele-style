import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",  // 设置输出目录为 dist
});
