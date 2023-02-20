import { defineConfig } from "tsup";

const isProduction = process.env.APP_ENV === "production";

export default defineConfig({
  clean: true,
  dts: false,
  entry: ["src/index.ts", "client/index.ts"],
  format: ["cjs"],
  minify: isProduction,
  onSuccess: "cp prisma/schemaBlue.prisma dist/src",
  sourcemap: true,
});
