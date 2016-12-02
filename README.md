# ava-browser-fixtures

fixtures for ava

## install

```
npm install ava-browser-fixture
```

## setup

Add `ava-browser-fixture` to the `require` block for ava in your `package.json`: 

Example:

```json
{
  "ava": {
    "files": [
      "src/*.spec.js"
    ],
    "require": [
      "babel-register",
      "ava-browser-fixture"
    ],
    "babel": "inherit"
  }
}
```

## usage

See [test.js](https://github.com/WeltN24/ava-browser-fixture/blob/master/test/test.js) for usage example.