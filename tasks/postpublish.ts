// tslint:disable:object-literal-sort-keys

import fs from "fs";
import path from "path";
import prettier from "prettier";

import { OUTPUT_PATH, pkg, ROOT_PATH } from "./config";
import task from "./util/task";

const copyNewPackageVersion = async () => {
  console.log("Start copying package.json version");
  const version = JSON.parse(fs.readFileSync(path.join(OUTPUT_PATH, "package.json"), "utf-8")).version;
  console.log(`Old version is ${pkg.version}`);
  console.log(`New version is ${version}`);
  const updatedPackageJson = { ...pkg, version };
  fs.writeFileSync(
    path.join(ROOT_PATH, "package.json"),
    prettier.format(JSON.stringify(updatedPackageJson), {
      parser: "json",
      tabWidth: 2,
      useTabs: false,
    }),
  );
  console.log(`Done`);
};

const postpack = task("postpack", async () => {
  console.log("postpack");
  return copyNewPackageVersion();
});

export default task("postpublish", async () => {
  console.log("postpublish");
  return copyNewPackageVersion();
});
