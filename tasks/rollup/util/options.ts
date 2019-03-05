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

const options = (
  target: "esm" | "cjs" | "umd",
  sourcemap: boolean,
  minify: boolean,
): { input: InputOptions; output: OutputOptions } => {
  const plugins = [
    typescript({
      tsconfigDefaults: ROLLUP_TS_DEFAULT_CONFIG[target],
      tsconfigOverride: ROLLUP_TS_OVERRIDE_CONFIG[target],
    }),
    ...(minify ? [terser()] : []),
  ];

  const input = {
    input: SRC_ENTRYPOINT,
    plugins,
  };

  const min = minify ? ".min" : "";

  const output = {
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

  return { input, output };
};

export default options;
