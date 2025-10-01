const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const minify = require("@rollup/plugin-terser");

const config = {
  input: "src/index.js",
  output: [
    {
      esModule: true,
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
    {
      esModule: true,
      file: "dist/index.min.js",
      format: "iife",
      sourcemap: true,
      plugins: [minify()],
    },
  ],
  plugins: [json(), commonjs(), nodeResolve()],
};

module.exports = config;
