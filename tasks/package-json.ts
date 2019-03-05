// tslint:disable:object-literal-sort-keys

import fs from "fs";
import path from "path";
import prettier from "prettier";

import { OUTPUT_PATH, pkg } from "./config";
import task from "./util/task";

export default task("package.json", async () => {
  const { name, version, description, author, license, keywords, repository, bugs, homepage } = pkg;
  const [main, types, browser, module, umdMain] = [pkg.main, pkg.types, pkg.browser, pkg.module, pkg["umd:main"]].map(
    (s: string) => s.slice(5),
  );
  const pkgJson = {
    name,
    version,
    description,
    author,
    license,
    main,
    types,
    browser,
    module,
    "umd:main": umdMain,
    keywords,
    repository,
    bugs,
    homepage,
  };

  fs.writeFileSync(
    path.join(OUTPUT_PATH, "package.json"),
    prettier.format(JSON.stringify(pkgJson), {
      parser: "json",
      tabWidth: 2,
      useTabs: false,
    }),
  );
});
