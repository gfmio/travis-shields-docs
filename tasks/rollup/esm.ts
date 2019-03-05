import task from "../util/task";
import build from "./util/build";
import options from "./util/options";

export default task("rollup:esm", async () => build(options("esm", true, false)));
