import { series } from "gulp";

import license from "./license";
import packageJson from "./package-json";
import readme from "./readme";
import rollup from "./rollup/rollup";
import tsc from "./tsc/tsc";

export default series(tsc, rollup, packageJson, license, readme);
