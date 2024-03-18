import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postscss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

// delete this comment

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      svgr(),
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled"
      }),
      nodeResolve(),
      commonjs(),
      postscss({
        extract: true,
        autoModules: true,
        sourceMap: true,
        use: ["sass"]
      }),
      terser(),
      image(),
      copy({
        targets: [
          { src: "./src/components/**/*.{gif,jpg,svg,png}", dest: "dist/esm" },
          { src: "./src/components/**/*.{gif,jpg,svg,png}", dest: "dist/cjs" }
        ]
      })
    ]
  }
];
