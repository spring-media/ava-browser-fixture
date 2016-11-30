// see https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md

const
  browserEnv = require('browser-env'),
  fs = require('fs');

// browserEnv needed for DOM related functions
exports.window = browserEnv();

// set window.Date
exports.window.Date = Date;

/**
 * returns a fixture with the given filename loaded into document
 *
 * @param {string} filename
 * @param {Function} test
 * @returns {Promise.<TResult>}
 * @constructor
 */
exports.Fixture = function Fixture(filename, test) {
  return new Promise((resolve, reject) => {
    // read content from fixtures
    fs.readFile(filename, (err, data) => {
      if (err) {
        return reject(reject);
      }
      return resolve(data);
    });
  }).then(data => {
    // write content of fixture to document
    document.write(data);
    return document;
  }).then(document => {
    // pass document to current test case
    return test(document);
  });
};
