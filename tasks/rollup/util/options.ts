import path from "path";

import { InputOptions, OutputOptions } from "rollup";
// tslint:disable-next-line:no-var-requires
const { terser } = require("rollup-plugin-terser");
import typescript from "rollup-plugin-typescript2";

import {
  OUTPUT_PATH,
  ROLLUP_BUNDLE_BASENAME,
  ROLLUP_TS_DEFAULT_CONFIG,
  ROLLUP_TS_OVERRIDE_CONFIG,
  ROLLUP_UMD_NAME,
  SRC_ENTRYPOINT,
} from "../../config";

const inputOptions = (target: "esm" | "cjs" | "umd", sourcemap: boolean, minify: boolean): InputOptions => {
  const plugins = [
    typescript({
      tsconfigDefaults: ROLLUP_TS_DEFAULT_CONFIG[target],
      tsconfigOverride: ROLLUP_TS_OVERRIDE_CONFIG[target],
    }),
    ...(minify ? [terser()] : []),
  ];

  return {
    input: SRC_ENTRYPOINT,
    plugins,
  };
};

const outputOptions = (target: "esm" | "cjs" | "umd", sourcemap: boolean, minify: boolean): OutputOptions => {
  const min = minify ? ".min" : "";

  return {
    cjs: {
      esModule: true,
      file: path.join(OUTPUT_PATH, ROLLUP_BUNDLE_BASENAME + min + ".js"),
      format: "cjs",
      sourcemap,
    } as OutputOptions,
    esm: {
      esModule: false,
      file: path.join(OUTPUT_PATH, ROLLUP_BUNDLE_BASENAME + min + ".mjs"),
      format: "esm",
      sourcemap,
    } as OutputOptions,
    umd: {
      esModule: false,
      file: path.join(OUTPUT_PATH, ROLLUP_BUNDLE_BASENAME + ".umd" + min + ".js"),
      format: "umd",
      name: ROLLUP_UMD_NAME,
      sourcemap,
    } as OutputOptions,
  }[target];
};

const options = (target: "esm" | "cjs" | "umd", sourcemap: boolean, minify: boolean) => ({
  input: inputOptions(target, sourcemap, minify),
  output: outputOptions(target, sourcemap, minify),
});

export default options;
