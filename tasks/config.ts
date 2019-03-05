import fs from "fs";
import path from "path";

// package.json

import _pkg from "../package.json";
export const pkg = _pkg;

// Paths

export const SRC_PATH = path.join(__dirname, "..", "src");
// prettier-ignore
export const TS_SRC_FILES = [
  path.join(SRC_PATH, "**/*.ts"),
  path.join(SRC_PATH, "**/*.tsx"),
];
export const SRC_ENTRYPOINT = path.join(SRC_PATH, "index.ts");
export const OUTPUT_PATH = path.join(__dirname, "..", "dist");

// TSC config for compiling individual source files

export const TS_SHARED_CONFIG = JSON.parse(
  fs
    .readFileSync(path.join(__dirname, "..", "tsconfig.json"))
    .toString()
    .split("\n")
    // Filter out all lines that either contain comments or that are empty
    .filter((line) => !line.includes("//") && line.length > 0)
    .join("\n"),
).compilerOptions;

export const TS_CJS_CONFIG = {
  ...TS_SHARED_CONFIG,
  module: "commonjs",
  target: "es3",
};

export const TS_MJS_CONFIG = {
  ...TS_SHARED_CONFIG,
  module: "esnext",
  target: "esnext",
};

// Rollup options

export const ROLLUP_TS_DEFAULT_CONFIG = {
  cjs: { compilerOptions: { declaration: true } },
  esm: { compilerOptions: { declaration: true } },
  umd: { compilerOptions: { declaration: true } },
};
export const ROLLUP_TS_OVERRIDE_CONFIG = {
  cjs: { compilerOptions: { declaration: false, module: "esnext", target: "es3" } },
  esm: { compilerOptions: { declaration: false, module: "esnext", target: "esnext" } },
  umd: { compilerOptions: { declaration: false, module: "esnext", target: "es3" } },
};

export const ROLLUP_BUNDLE_BASENAME = pkg.name;
export const ROLLUP_UMD_NAME = "TravisShieldsDocs";
