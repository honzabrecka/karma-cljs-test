# karma-cljs-test

> Adapter for the cljs.test testing framework.

## Installation

The easiest way is to keep karma-cljs-test as a dependency in your package.json:

```json
{
  "devDependencies": {
    "karma": "~0.12.0",
    "karma-cljs-test": "~0.1.0"
  }
}
```

You can simply do it by:

```
npm install karma-cljs-test --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  var root = 'target/public/dev';

  config.set({
    frameworks: ['cljs-test'],

    files: [
      root + '/goog/base.js',
      root + '/cljs_deps.js',
      root + '/app.js',
      {pattern: root + '/*.js', included: false},
      {pattern: root + '/**/*.js', included: false}
    ],

    client: {
      args: ['app.test_runner.run_with_karma']
    },
  });
};
```
