import { series } from "gulp";

import task from "../util/task";

import cjs from "./cjs";
import esm from "./esm";
import minCjs from "./min.cjs";
import minEsm from "./min.esm";
import minUmd from "./min.umd";
import umd from "./umd";

export default task("rollup", series(cjs, minCjs, esm, minEsm, umd, minUmd));
