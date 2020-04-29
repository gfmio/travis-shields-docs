# example-calculator

This package provides a simple calculator class and several "safe" mathematical operations, in which all undefined or infinite results are replaced with 0. It is a simple educational project using a range of fully-configured and integrated external tools.

<!-- Github -->

[![GitHub license](https://img.shields.io/github/license/gfmio/example-calculator.svg 'GitHub license')](https://github.com/gfmio/example-calculator/blob/master/LICENSE)
[![Open issues](https://img.shields.io/github/issues/gfmio/example-calculator.svg 'Open issues')](https://github.com/gfmio/example-calculator/issues)
[![Closed issues](https://img.shields.io/github/issues-closed/gfmio/example-calculator.svg 'Closed issues')](https://github.com/gfmio/example-calculator/issues?utf8=✓&q=is%3Aissue+is%3Aclosed)
[![Open Pull Requests](https://img.shields.io/github/issues-pr/gfmio/example-calculator.svg 'Open Pull Requests')](https://github.com/gfmio/example-calculator/pulls)
[![Closed Pull Requests](https://img.shields.io/github/issues-pr-closed/gfmio/example-calculator.svg 'Closed Pull Requests')](https://github.com/gfmio/example-calculator/pulls?utf8=✓&q=is%3Apr+is%3Aclosed)
[![Commit activity](https://img.shields.io/github/commit-activity/m/gfmio/example-calculator.svg 'Commit activity')](https://github.com/gfmio/example-calculator/graphs/commit-activity)
[![Github contributors](https://img.shields.io/github/contributors/gfmio/example-calculator.svg 'Github contributors')](https://github.com/gfmio/example-calculator/graphs/contributors)
[![Last commit](https://img.shields.io/github/last-commit/gfmio/example-calculator.svg 'Last commit')](https://github.com/gfmio/example-calculator/commits/master)

<!-- Build & test tools -->

[![Travis.CI build status](https://img.shields.io/travis/com/gfmio/example-calculator.svg 'Travis.CI build status')](https://travis-ci.com/gfmio/example-calculator)
[![Codecov Coverage Status](https://img.shields.io/codecov/c/github/gfmio/example-calculator.svg 'Codecov Coverage Status')](https://codecov.io/gh/gfmio/example-calculator)
[![Known Vulnerabilities on Synk](https://img.shields.io/snyk/vulnerabilities/github/gfmio/example-calculator.svg 'Known Vulnerabilities')](https://snyk.io/test/github/gfmio/example-calculator?targetFile=package.json)
![Dependencies](https://img.shields.io/david/gfmio/example-calculator.svg 'Dependencies')
![DevDependencies](https://img.shields.io/david/dev/gfmio/example-calculator.svg 'DevDependencies')
![OptionalDependencies](https://img.shields.io/david/optional/gfmio/example-calculator.svg 'OptionalDependencies')
![PeerDependencies](https://img.shields.io/david/peer/gfmio/example-calculator.svg 'PeerDependencies')
[![Code Climate issues](https://img.shields.io/codeclimate/issues/gfmio/example-calculator.svg 'Code Climate issues')](https://codeclimate.com/github/gfmio/example-calculator/issues)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/gfmio/example-calculator.svg 'Code Climate maintainability')](https://codeclimate.com/github/gfmio/example-calculator/maintainability)
[![Code Climate maintainability (percentage)](https://img.shields.io/codeclimate/maintainability-percentage/gfmio/example-calculator.svg 'Code Climate maintainability (percentage)')](https://codeclimate.com/github/gfmio/example-calculator/maintainability)
[![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/gfmio/example-calculator.svg 'Code Climate technical debt')](https://codeclimate.com/github/gfmio/example-calculator)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/gfmio/example-calculator.svg 'Code Climate coverage')](https://codeclimate.com/github/gfmio/example-calculator)
[![Code Climate coverage (letter)](https://img.shields.io/codeclimate/coverage-letter/gfmio/example-calculator.svg 'Code Climate coverage (letter)')](https://codeclimate.com/github/gfmio/example-calculator)

<!-- NPM shields -->

[![NPM license](https://img.shields.io/npm/l/example-calculator.svg 'NPM license')](https://www.npmjs.com/package/example-calculator)
[![NPM version](https://img.shields.io/npm/v/example-calculator.svg)](https://www.npmjs.com/package/example-calculator)
[![NPM downloads per week](https://img.shields.io/npm/dw/example-calculator.svg)](https://www.npmjs.com/package/example-calculator)
[![Minified gzipped package size](https://img.shields.io/bundlephobia/minzip/example-calculator.svg)](https://www.npmjs.com/package/example-calculator)
[![NPM type declarations](https://img.shields.io/npm/types/example-calculator.svg)](https://www.npmjs.com/package/example-calculator)
![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/example-calculator.svg 'Known Vulnerabilities')

<!-- Misc -->

![Actively maintained (2020)](https://img.shields.io/maintenance/yes/2020.svg 'Actively maintained (2020)')
![Website is up/down](https://img.shields.io/website-up-down-green-red/https/github.com/gfmio/example-calculator.svg)
[![Chat on Gitter](https://img.shields.io/gitter/room/gfmio/example-calculator.svg 'Chat on Gitter')](https://gitter.im/gfmio/example-calculator)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg 'Blazing fast')](https://twitter.com/acdlite/status/974390255393505280)
[![Follow @gfmio on Twitter](https://img.shields.io/twitter/follow/gfmio.svg?label=follow+@gfmio 'Follow @gfmio on Twitter')](https://twitter.com/gfmio)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg 'code style: prettier')
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg 'All Contributors')](#contributors)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Why

This is a simple educational project to set up and work with a variety of libraries and external tools. Among others, it uses:

- [ts-pkg-scripts](https://www.npmjs.com/package/ts-pkg-scripts) build tools for compiling, bundling and packaging TypeScript libraries (uses [gulp](https://gulpjs.com/) and [rollup](https://rollupjs.org/) internally)
- [TypeScript](https://typescriptlang.org) for all source, test, and gulp task files
- the [mocha](https://mochajs.org/) test framework, [chai](https://www.chaijs.com/) assertion library and [istanbul](https://istanbul.js.org) code coverage tool with its [nyc](https://www.npmjs.com/package/nyc) command line interface
- [Travis.CI](https://travis-ci.com) for continuous integration (running tests and deploying new package versions)
- [CodeCov](https://codecov.io) and [Code Climate](http://codeclimate.com) for monitoring code coverage and watching the codebase for code smells
- [semantic-release](https://semantic-release.gitbook.io/) to release new versions of the package, when code gets pushed to the master branch and significant changes have occurred, and for generating the changelog
- [husky](https://www.npmjs.com/package/husky) to run commit hooks
- [prettier](https://prettier.io/) for auto-formatting the source code (run as a pre-commit hook on all staged changes)
- [commitlint](https://conventional-changelog.github.io/commitlint/) for ensuring that all commit messages follow the same format (run as a commit message hook)
- [commitizen](http://commitizen.github.io/cz-cli/) for writing commit messages adhering to the required format. Instead of using `git commit` to push commits, you use `yarn commit`, which invokes commitizen.
- Shields from [shields.io](https://shields.io) for displaying a range of status info about the repository and package
- [David](https://david-dm.org) for monitoring if all dependencies are up to date
- [Snyk](https://snyk.io/) for monitoring the project for security vulnerabilities
- [Gitter](https://gitter.im) as community chat
- [typedoc](https://typedoc.org/) for generating documentation
- [gh-pages](https://www.npmjs.com/package/gh-pages) for pushing the documentation to Github pages. It is accessible at <https://gfmio.github.io/example-calculator>.
- [All Contributors](https://allcontributors.org/) for managing contributors

The repository also features Github issue templates, a pull request template, a [code of conduct](CODE_OF_CONDUCT.md) and a [contributing guideline](CONTRIBUTING.md).

Explore some of the tools above and look at the configuration for each to see how they are used and start using them in your own projects, if they fit your needs.

If you want to suggest changes or additions, find an error or that anything does not work or no longer works, please file an issue or submit a pull request with your suggested changes.

## Install

Install the package from NPM:

```sh
# If you use yarn
yarn add example-calculator

# If you use NPM
npm install example-calculator
```

You can also import the package bundle from unpkg by inserting the following script tag in your HTML code.

```html
<script src="https://unpkg.com/example-calculator/example-calculator.umd.min.js"></script>
```

The module content will be available as the UMD global `exampleCalculator`.

## Usage

The package provides a calculator class.

```ts
import Calculator from 'example-calculator';
const calculator = new Calculator();
```

You can supply an initial value to the calculator as an argument to its constructor (by default 0).

```ts
const calculator2 = new Calculator(2);
```

The current value of the calculator can be accessed using the `value()` method.

```ts
console.log(calculator.value());
// Prints 0
console.log(calculator2.value());
// Prints 2
```

`clear()` resets the value in the memory of the calculator to 0. All operations of the calculator, apart from `value()` return the instance, so operations can be chained.

```ts
console.log(calculator2.clear().value());
// Prints 0
```

The calculator provides a range of simple mathematical operations, which perform an operation on the value in memory.

```ts
// Adds 2 to the current value in memory
calculator.add(2);
// Subtracts 1 from the current value in memory
calculator.sub(1);
// Multiplies the current value in memory with 2
calculator.mul(2);
// Divides the current value in memory by 2
calculator.div(2);
// Sets the value in memory to the modulus (remainder) of the current value and 3
calculator.mod(3);
// Sets the value in memory to the exponentiated current value
calculator.exp();
// Sets the value in memory to the natural logarithm of the current value
calculator.ln();
// Sets the value in memory to sine of the current value
calculator.sin();
// Sets the value in memory to cosine of the current value
calculator.cos();
// Sets the value in memory to tangent of the current value
calculator.tan();
// Sets the value to the inverse (1/x) of the current value
calculator.inverse();
```

Some mathematical operations are not defined for all values, such as division by 0 or the logarithm of a negative number or 0. In all of these circumstances, the return values are 0.

```ts
calculator.clear().add(1).div(0).value();
// Returns 0
calculator.clear().add(1).mod(0).value();
// Returns 0
calculator.clear().sub(1).ln().value();
// Returns 0
calculator.clear().inverse().value();
// Returns 0
```

You can also import some operations as standalone functions from their submodules:

```ts
import add from 'example-calculator/add';
import sub from 'example-calculator/sub';
import mul from 'example-calculator/mul';
import div from 'example-calculator/div';
import mod from 'example-calculator/mod';
import ln from 'example-calculator/ln';

console.log(add(1, 1));
// Prints 2
console.log(sub(1, 1));
// Prints 0
console.log(mul(2, 2));
// Prints 4
console.log(div(6, 3));
// Prints 2
console.log(mod(6, 4));
// Prints 2
console.log(ln(1));
// Prints 0
```

## Contributing

Please read [CODE_OF_CODUCT.md](https://github.com/gfmio/example-calculator/blob/master/CODE_OF_CODUCT.md) for details on our code of conduct and [CONTRIBUTING.md](https://github.com/gfmio/example-calculator/blob/master/CONTRIBUTING.md) for all details on how to contribute to this project (with code or otherwise) and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Releases are generated using [semantic-release](https://semantic-release.gitbook.io). For the versions available, see the [tags](https://github.com/gfmio/example-calculator/tags) on this repository.

## License

[MIT](LICENSE)

## Acknowledgments

- This project has taken some inspiration from [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter) by [@alexjoverm](https://github.com/alexjoverm)
- The README and CONTRIBUTING files have taken inspiration from [these](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) [gists](https://gist.github.com/PurpleBooth/b24679402957c63ec426) by [@PurpleBooth](https://github.com/PurpleBooth) and the contributing guidelines from [phly](https://github.com/phly/http/blob/master/CONTRIBUTING.md) and [akka](https://github.com/akka/akka-http/blob/master/CONTRIBUTING.md).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/2878342?v=4" width="100px;" alt="Frédérique Mittelstaedt"/><br /><sub><b>Frédérique Mittelstaedt</b></sub>](https://www.gfm.io)<br />[📖](https://github.com/gfmio/example-calculator/commits?author=gfmio "Documentation") [⚠️](https://github.com/gfmio/example-calculator/commits?author=gfmio "Tests") [💻](https://github.com/gfmio/example-calculator/commits?author=gfmio "Code") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
