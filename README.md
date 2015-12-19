# NPM Template for a project using ES2015, Flow and Jest

## What does it do
The package.json and skeleton provided gives you a ready to use project configuration that allows you to:
* Use [ES2015](https://babeljs.io/docs/learn-es2015/) in your code
* Use [Flow](http://flowtype.org/) types
* Run [Jest](https://facebook.github.io/jest/) tests
* Distribute to the browser

## How to use
```bash
curl -L https://github.com/aadsm/npm-template-es2015-flow-jest/tarball/master | tar zx
mv npm-template-es2015-flow-jest* project-name
cd project-name && npm install
```

## Structure
* `src/` - es2015 source code.
* `src/index.js` - main entry point.
* `src/__tests__/` - tests.
* `bundle/` - compiled source code.
* `dist/` - browser bundles.

### Shipping
`npm run build` - compiles all your source code and puts it into `build/`.

### Testing
`npm test` - runs all jest tests located in `src/__tests__/`.

### Developing
`npm run watch` - watches `src/` for changes and updates `dist/` as needed.

### Publishing to npm
When running `npm publish` only the `dist/` directory will be published. So before doing it, run `npm run dist`.

### Browser distribution
`npm run browser` - bundles your code using browserify and uglifyjs. It produces  `dist/browser.js` (development version) and `dist/browser.min.js` (production version) that you can include in your webapp.
`npm run browser-watch` - watches `src/` for changes and updates `dist/browser.js` as needed.

Browserify is configured to use UMD and exports the main module into `window.projectName`. Change the `-s projectName` option in `package.json` to use a different name.
