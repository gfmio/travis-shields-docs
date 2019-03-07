// tslint:disable:object-literal-sort-keys

import fs from "fs";
import path from "path";
import prettier from "prettier";

import { OUTPUT_PATH, pkg, ROOT_PATH } from "./config";
import task from "./util/task";

export default task("postpublish", async () => {
  const version = JSON.parse(fs.readFileSync(path.join(OUTPUT_PATH, "package.json"), "utf-8")).version;
  const updatedPackageJson = { ...pkg, version };
  fs.writeFileSync(
    path.join(ROOT_PATH, "package.json"),
    prettier.format(JSON.stringify(updatedPackageJson), {
      parser: "json",
      tabWidth: 2,
      useTabs: false,
    }),
  );
});
