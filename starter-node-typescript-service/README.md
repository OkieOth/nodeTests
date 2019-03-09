# Readme

Your readme should be right here.

## Dependencies

* NodeJS 10+
* npm 6+

## Template usage

This project provides:

* Linting (tslint)
* use nexus as standard npm source
* Out of source build (100% in build folder)
* Live debug from within vscode (Just press F5) in ts running the out of sourece build.
* mocha and chai as test framework
* mocha test debugging
* Using the console.log everything lib for ts (also works in JS)

### How do I use it ?
* checkout the template
* change the origin url
* change package name and description in package.json
* Add some description to the Readme section of this file and remove the "Template usage" section
* Start coding

## Development

Do a `npm install` before trying anything else.

### Run locally

```sh
npm start (which will run gulp)
```

Gulp will run all checks (but no tests - these are "only" run on build or manually) on every save automagically for you and restart the application.

### Run tests

```sh
npm test
```

This will build to `build` folder and run all tests in `test` folder using nyc, mocha and mochawesome.
