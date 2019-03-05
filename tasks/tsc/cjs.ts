import { dest, src } from "gulp";
import sourcemaps from "gulp-sourcemaps";
import ts from "gulp-typescript";

import { OUTPUT_PATH, TS_CJS_CONFIG, TS_MJS_CONFIG, TS_SRC_FILES } from "../config";
import task from "../util/task";

/** Compile TypeScript to CJS modules */
export default task("tsc:cjs", () =>
  src(TS_SRC_FILES)
    // Initialize source maps
    .pipe(sourcemaps.init())
    // Compile TypeScript with target = es3 and module = commonjs
    .pipe(ts(TS_CJS_CONFIG))
    // Generate source maps
    .pipe(sourcemaps.write("."))
    // Write to disk
    .pipe(dest(OUTPUT_PATH)),
);
