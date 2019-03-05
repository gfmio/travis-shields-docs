import { parallel } from "gulp";

import task from "../util/task";

import cjs from "./cjs";
import esm from "./esm";

/** Compile TypeScript to CJS and ES modules in parallel */
export default task("tsc", parallel(cjs, esm));
