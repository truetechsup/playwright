# Playwright example
Example of tests with Playwright framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd playwright`
3. Install dependencies `npm install`
4. Configure the tests to run in **tms.config.js** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#configuration)
5. Run tests via `npx playwright test` to upload the results to TMS

## Project structure

* **tests/** – test files
    * **annotations.test.ts** – simple test examples with [annotations testit-adapter-playwright](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
    * **methods.test.ts** – simple test examples with [methods testit-adapter-playwright](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
    * **steps.test.ts** – simple test examples with [steps testit-adapter-playwright](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-playwright#methods)
* **playwright.config.ts** - [configuration file of Playwright](https://playwright.dev/docs/test-configuration)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
* **tms.config.json** - configuration file where specified base options for tests
