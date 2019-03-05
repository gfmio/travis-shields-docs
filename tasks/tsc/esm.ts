import { dest, src } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import ts from "gulp-typescript";

import { OUTPUT_PATH, TS_MJS_CONFIG, TS_SRC_FILES } from "../config";
import fileEndsIn from "../util/fileEndsIn";
import task from "../util/task";

/** Compile TypeScript to ES modules */
export default task("tsc:esm", () =>
  src(TS_SRC_FILES)
    // Initialize source maps
    .pipe(sourcemaps.init())
    // Compile TypeScript with target = esnext and module = esnext
    .pipe(ts(TS_MJS_CONFIG))
    // Rename .js files to .mjs
    .pipe(gulpif(fileEndsIn(".js"), rename({ extname: ".mjs" })))
    // Generate source maps
    .pipe(sourcemaps.write("."))
    // Write to disk
    .pipe(dest(OUTPUT_PATH)),
);
