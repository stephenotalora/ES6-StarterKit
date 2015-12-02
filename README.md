# ES6 - StarterKit

- A Simple ES6 (EcmaScript2015) starter kit with the purpose to expedite initial boiler plate code. 
- Includes two build flavours, both directly through npm or gulp
- with npm or gulp, you can extend your build system as need be. The start kit includes some initial task that you can make use of.

## Writtent By

- `Name: ` - Jonathan S. Otalora.
- `LinkedIn: ` - https://ca.linkedin.com/in/jotalora
- `github: ` - https://github.com/stephenotalora

## GULP Tasks

- `gulp serve`  - run one page WebApp @ localhost:8080.
- `gulp test`   - run tape and all unit testing.
- `gulp trans`  - Transpile from ECMAScript2015 (ES6) into ES5.
- `gulp build`  - please note build command requires code to be transpiled in order to run in the browser **'OR'**.
- `gulp` - to run all tasks - note you can modify the default task execution order within the array that is passed to the default gulp task.

## Project Layout

- `src/*` - all pre-babel source-code goes here.
- `src/tests/` - Unit testing frame work (ES6) tests go here. Starter kit 
- `./template/` - where the V in MVC can be found. 
- `src/.eslintrc` - ESLint configuration
- `coverage/` - Code coverage reports are output here.
- `dist/` - generated ES5 source output goes here. This directory is under gitignore.
- `.gitignore` - a sensible .gitignore file to prevent from checking in generated source.
- `.npmignore` - preconfigured to publish only the generated source code.
- `package.json` - NPM deps. 

## npm scripts 

These scripts are the main way to interact with npm module. I will also write some gulp to simplify time permitting

- `compile` - run [babel](https://babeljs.io/) to compile your ES6 source to ES5. Output goes to the `dist/` directory.
- `lint` - run [ESLint](http://eslint.org/) on ES6 source and reports any style errors.

Jonathan S. Otalora © All rights reserved.