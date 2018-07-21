![][header-image]

[![CircleCI][circleci-image]][circleci-url]
[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
![License][license]
![Issues][issues]

`neutrino-middleware-wrapper` is a Neutrino Middleware for the [Webpack Wrapper Plugin.][wrapper-link]

## Get Started

```sh
npm install --save-dev neutrino-middleware-wrapper
```

```js
module.exports = {
  use: [
    'neutrino-middleware-wrapper',
    {
      header: '(function() {',
      footer: '})();'
    }
  ]
}
```

## Features

- Uses the [Webpack Wrapper Plugin][wrapper-link] wrap output files with custom text or code.
- Supports a `test` option to change the regex used to match output filenames.
- Passes `header` and `footer` options directly to the plugin.

[header-image]: https://raw.githubusercontent.com/sammarks/art/master/neutrino-middleware-wrapper/header.jpg
[circleci-image]: https://img.shields.io/circleci/project/github/sammarks/neutrino-middleware-wrapper.svg
[circleci-url]: https://circleci.com/gh/sammarks/neutrino-middleware-wrapper/tree/master
[npm-version]: https://img.shields.io/npm/v/neutrino-middleware-wrapper.svg
[npm-downloads]: https://img.shields.io/npm/dm/neutrino-middleware-wrapper.svg
[npm-url]: https://www.npmjs.com/package/neutrino-middleware-wrapper
[license]: https://img.shields.io/github/license/sammarks/neutrino-middleware-wrapper.svg
[issues]: https://img.shields.io/github/issues/sammarks/neutrino-middleware-wrapper.svg

[wrapper-link]: https://github.com/levp/wrapper-webpack-plugin
