import { dest, src } from "gulp";
import task from "./util/task";

import { OUTPUT_PATH } from "./config";

export default task("readme", () => src("README.md").pipe(dest(OUTPUT_PATH)));
