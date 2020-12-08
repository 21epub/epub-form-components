# epub-form-components

> Made with create-storybook-react-library

[![NPM](https://img.shields.io/npm/v/epub-form-components.svg)](https://www.npmjs.com/package/epub-form-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://img.shields.io/travis/com/dxsixpc/epub-form-components)](https://travis-ci.com/github/dxsixpc/epub-form-components) [![Codecov](https://img.shields.io/codecov/c/github/dxsixpc/epub-form-components)](https://codecov.io/gh/dxsixpc/epub-form-components)

## Intro

This is a component for react.

## Feature

- [x] Easy-to-use
- [x] Typescript Support
- [x] Storybook UI component

## Install

```bash
npm install --save @21epub/epub-form-components
```

## Usage

```tsx
import React, { Component } from 'react'

import { getComponents } from '@21epub/epub-form-components'

class Example extends Component {
  Component = getComponents(widget_type)
  render() {
    return <Component />
  }
}
```

For Details: See Example

## Developing and running on localhost

First install dependencies and then install peerDeps for storybook dev:

```sh
npm install
npm run install-peers
```

To run Example in hot module reloading mode:

```sh
npm start   # or npm run storybook
```

To create a bundle library module build:

```sh
npm run build
```

## Testing

To run unit tests:

```sh
npm test
```

## License

MIT © [dxsixpc](https://github.com/dxsixpc)
