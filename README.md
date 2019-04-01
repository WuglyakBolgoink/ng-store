# NgStore

[![Build Status](https://travis-ci.com/WuglyakBolgoink/ng-store.svg?branch=develop)](https://travis-ci.com/WuglyakBolgoink/ng-store)
[![Build Status](https://travis-ci.com/WuglyakBolgoink/ng-store.svg?branch=master)](https://travis-ci.com/WuglyakBolgoink/ng-store)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `yarn run dev:run` for a dev server. The app will automatically open and reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn run ng:build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn run ng:e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## [Store][https://ngrx.io]

1. Install @ngrx components
```bash
$ yarn add @ngrx/{store,effects,entity,store-devtools}
```
2. Install [@ngrx/schematics][https://github.com/ngrx/platform/tree/master/docs/schematics]
```bash
$ yarn add @ngrx/schematics -D -E
```

and [update angular.json][https://github.com/ngrx/platform/tree/master/docs/schematics#default-schematics-collection].

3. Create `root` store[1][https://github.com/ngrx/platform/blob/master/docs/schematics/store.md]
```bash
ng g store Root -m modules/root-store --state-path modules/root-store/root-reducers --state-interface root-state --root
```
4. Create feature-store module
```bash
ng g m modules/root-store/feature-stores/banksapi -m modules/root-store
```
5. Create feature-store in feature-store module and link it with root-store
```bash
ng g store banks-api -m modules/root-store/feature-stores/banksapi --state-path modules/root-store/feature-stores/banksapi/reducers --state-interface bank-accesses-state
```

## Mock Server

```bash
$ yarn run dev:mock
```

> Server listening on port 3333
