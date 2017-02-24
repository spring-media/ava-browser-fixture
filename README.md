# ava-browser-fixtures

A module which adds a Browser Environment to your Ava Test.

When your Code modifies the DOM or needs some HTML to run, you can setup these
HTML-File as a Fixture can access them by the usual Browser-API (i.e.:
`document.querySelector()`) with this module.

## Install

Install this module with `npm` or `yarn`.

**NPM:**

```bash
npm install --save-dev ava-browser-fixture
```

**Yarn:**

```bash
yarn add --dev ava-browser-fixture
```

## Setup

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

Setup your fixture in the beforeEach block:

```javascript
import test from "ava";
import {fixture} from "../index";

test.beforeEach('setup fixture', fixture("./test/test.html"));

test("test example", t => {
  t.is(t.context.document.documentElement.querySelector("h1").textContent, "Hello Test");
});
```
