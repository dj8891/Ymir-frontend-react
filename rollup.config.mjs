// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
const isDevelopment = process.env.NODE_ENV !== "production";

export default [
  // iFrame Configuration
  {
    input: "src/index.tsx", // Updated to .ts extension
    output: {
      file: "dist/index.bundle.js",
      format: "iife",
      sourcemap: isDevelopment,
      inlineDynamicImports: true,
    },

    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
        preventAssignment: true,
      }),
      typescript(),
      postcss(),
      image(),
      resolve(),
      commonjs(),
      terser(),
      isDevelopment &&
        serve({
          open: true,
          contentBase: ["dist"],
          host: "localhost",
          port: 10001,
        }),
      isDevelopment &&
        livereload({
          watch: "dist",
        }),
    ].filter(Boolean),
  },
];
