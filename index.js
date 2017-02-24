// see https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md

const
  browserEnv = require('browser-env'),
  fs = require('fs');

// browserEnv needed for DOM related functions
window = browserEnv();

// set window.Date
window.Date = Date;

/**
 * returns a fixture with the given filename loaded into document
 *
 * @param {string} filename relative to project root (since ava@0.17.0)
 * @param {Function} test
 * @returns {Promise.<TResult>}
 * @constructor
 */
exports.fixture = function fixture(filename) {
  return function(t) {
    return new Promise((resolve, reject) => {
      // read content from fixtures
      fs.readFile(filename, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    }).then(data => {
      // write content of fixture to document
      document.write(data);
      return document;
    }).then(document => {
      // write document and window to context
      t.context.document = document;
      t.context.window = window;
    });
  }
};
