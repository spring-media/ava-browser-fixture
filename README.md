# ava-browser-fixtures

A module which adds a Browser Environment to your Ava Test.

When your Javascript need a Browser-Envirnment or some HTML to run, you can setup
these HTML-File as a Fixture, and your Javascript can access them by the usual
Browser-API (i.e.: `document.querySelector()`).

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

```javascript
import test from "ava";
import {fixture} from "../index";

test.beforeEach('setup fixture', fixture("./test/test.html"));

test("test example", t => {
  t.is(t.context.document.documentElement.querySelector("h1").textContent, "Hello Test");
});
```
