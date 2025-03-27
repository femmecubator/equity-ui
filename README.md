# Equity UI by Femmecubator

[![npm version](https://badge.fury.io/js/@femmecubator%2Fequity-ui.svg)](https://badge.fury.io/js/@femmecubator%2Fequity-ui)

<img src="https://www.opensprints.tech/assets/images/hero-banner-image-239404917aa9df028c95b803fdcb8970.png" width="100%" />

## Tech stack

- [Storybook](https://storybook.js.org) for UI component development
- [Emotion](https://emotion.sh/) for style composition
- [React](https://reactjs.org/) for building declarative, component-based user interfaces
- [Typescript](https://www.typescriptlang.org/) for static type checking
- [Vite](https://vitejs.dev/) as a build tool for fast and lean dev experience
- [Vitest](https://vitest.dev/) for unit-testing
- [Chromatic](https://www.chromatic.com/) for visual testing and Storybook deployment
- [NPM](https://www.npmjs.com/) for packaging and distribution

## Setting up your Env

- Repo setup
    - Git clone: equity-ui
    Installing the type will be dependent on  whatever package manager your project repo is using Beagle is using PNPM
    > If you haven’t installed PNPM now is the time: homeBrew Installation: https://formulae.brew.sh/formula/pnpm
    - Install NPM `npm install @femmecubator/equity-ui`
    - Complimentt with PNPM `pnpm add @femmecubator/equity-ui`
 
- Push cmds
  - [optional] Set up no push to origin master : `git push --no-push origin master`
     > Currently: Prs made from forks will fail to build on the CI CD:  Forks don't have write access to the main repo, which might be required for certain CI steps
  - Pull from original master repo
  - Create a the feature branch `<initials>-<featureName>`
  - set versions label `major minor` patch on your pr
 
- Running the application
  - Running and viewing the application to see the components `pnpm storybook`

## Install

npm

```bash
npm install @femmecubator/equity-ui
```

yarn

```bash
yarn add @femmecubator/equity-ui
```

pnpm

```bash
pnpm add @femmecubator/equity-ui
```

## Usage

```javascript
import { Component } from '@femmecubator/equity-ui';
```

## License

MIT License © 2024 Femmecubator
