'use strict';

const path = require('path');
const denodeify = require('denodeify');
const cpr = denodeify(require('cpr'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Acceptance | Application', function() {
  this.timeout(900000);

  it('works', function() {
    let app = new AddonTestApp();

    return app.create('dummy', {
      fixturesPath: 'tests'
    }).then(() => {
      return Promise.all([
        'config/ember-try.js',
        'tests'
      ].map(p => cpr(p, path.join(app.path, p), {
        overwrite: true,
        filter(p) {
          return !p.startsWith(path.normalize('tests/dummy'));
        }
      })));
    }).then(() => {
      return app.runEmberCommand(
        'try:one',
        process.env.EMBER_TRY_SCENARIO,
        '--skip-cleanup'
      );
    });
  });
});
