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

```js

import test from 'ava';
import {Fixture} from "ava-browser-fixture";

test('test my module', t => Fixture("./fixtures/loadModule.html", (document) => {
  // .. 
}));
```

