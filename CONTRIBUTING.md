# Contributing

Welcome and Thank you for contributing to this project!

Please note we have a [code of conduct](https://github.com/gfmio/example-calculator/blob/master/CODE_OF_CONDUCT.md). PLease follow it in all your interactions with the project and be respectful to all members of the community at all times.

- Please suggest **enhancements**, report **bugs** or other **issues** at <https://github.com/gfmio/example-calculator/issues> using the provided issue templates. Before submitting an issue, please check if a similar issues has already been submitted previously.
- Please do not report **security-related issues** publicly, but rather via email to <git@gfm.io> (PGP-encrypted, if at all possible).
- We follow the standard GitHub [fork & pull](https://help.github.com/articles/using-pull-requests/#fork--pull) approach to pull requests. Just fork the official repo, develop in a branch, and submit a PR at <https://github.com/gfmio/example-calculator/pulls>!

## Community

In case of questions about the contribution process or for discussion of specific issues please visit the [gitter chat](https://gitter.im/gfmio/example-calculator).

If you don't have previous open source experience or experience contributing to this project, have a look at issues tagged [good first issue](https://github.com/gfmio/example-calculator/labels/good%20first%20issue). They are typically small, self-contained and an easy way to get started with contributions.

## Non-code contributions

You don't need to code to contribute to this project. For example, you can:

- report (and ideally correct) typos, errors, bad writing style or unclear writing in the documentation
- contribute a translation
- contribute graphic design work (e.g. logo, illustrations)
- give a talk about this project
- organise an event about this project
- contribute any other ideas you may have :)

If appropriate, please file an issue and outline what you'd like to do. If you're unsure, you can also post a message on [Gitter](https://gitter.im/gfmio/example-calculator).

If you're contributing a small fix, please file an issue and ideally a correcting pull request.

Open issues which require non-code contributions are marked using the tag [no-code](https://github.com/gfmio/example-calculator/labels/no-code).

## Code contributions

All code contributions need to:

1. Provide unit tests and meet the minimum necessary coverage levels
2. Pass all unit tests
3. Provide docstrings for relevant methods matching the style of the rest of the document
4. Provide other relevant documentation (if features or options were added)
5. Not add any unnecessary dependencies

### Workflow

1. Fork this repository
2. Hack and test on your feature (on a branch)
3. Submit a PR
4. Keep polishing it until received enough LGTM
5. Profit!

### Branches

- `master` is protected and contains the current stable version. Commits / Merges into master trigger a new release of the package through `semantic-release`.
- `development` contains the current development version. Pull requests are merged into `development` first before all changes are merged into `master`.

### Getting started

Run `yarn install` to install all the depenendencies.

### Commit message format

We use `commitlint` to verify that commit messages follow the conventional changelog format. This is important, because `semantic-release` uses the commit messages to generate the changelog and determine the new package version.

You can use `commitizen` to create messages in the right format. Instead of commiting changes using `git commit`, you can run `yarn commit` to invoke commitizen.

### Build process

We use `gulp` to orchestrate the build process.

Internally, gulp invokes the TypeScript compiler to transpile each file, once targeting `es3` with module format `commonjs` and once using target `esnext` and module format `esnext`.

The former generate `.js` files, the latter `.mjs` files. Both produce source maps (`.js.map` and `.mjs.map`). And finally, the compiler generates TypeScript declarations (`d.ts`) and declaration maps (`.d.ts.map`).

Hence, a single file (`sample.ts`) will generate six output files:

- `sample.js`: ES3-compatible CommonJS version
- `sample.js.map`: Source map of `sample.js`
- `sample.mjs`: ESM version
- `sample.mjs.map`: Source map of `sample.mjs`
- `sample.d.ts`: TypeScript declarations
- `sample.d.ts.map`: TypeScript declaration map

The package structure is flattened, so that `src/sample.ts` will generate files directly in the package root directory (`dist`). The build process copies the `LICENSE` file and generates a `package.json` in `dist`.

Additionally, `rollup` generates three tree-shaken, bundled versions of the entire package as well as three minified versions, each with their own source map, which get placed in the package root (`dist`).

- CommonJS: `<packageName>.js` and its source map `<packageName>.js.map`, `<packageName>.min.js` and its source map `<packageName>.min.js.map`
- ESM: `<packageName>.mjs` and its source map `<packageName>.mjs.map`, `<packageName>.min.mjs` and its source map `<packageName>.min.mjs.map`
- UMD: `<packageName>.umd.js` and its source map `<packageName>.umd.js.map`, `<packageName>.umd.min.js` and its source map `<packageName>.umd.min.js.map`

### Tests

We use `mocha`, `chai` and `istanbul` to run tests and generate coverage reports. All test files are written in TypeScript and located in the `tests` directory.

You can run the tests using `yarn test`.

### Continuous integration

All pull requests and commits to the repository trigger automatic builds on Travis.CI.

Commits to `master` trigger `semantic-release`, which generates the changelog, increases the package version and releases the package.

The test coverage reports are submitted to CodeCov and Code Climate.
