import cjs from "./cjs";
import esm from "./esm";
import minCjs from "./min.cjs";
import minEsm from "./min.esm";
import minUmd from "./min.umd";
import rollup from "./rollup";
import umd from "./umd";

export default { cjs, esm, umd, rollup, min: { cjs: minCjs, esm: minEsm, umd: minUmd } };
