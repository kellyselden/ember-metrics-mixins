'use strict';

const expect = require('chai').expect;
const denodeify = require('denodeify');
const request = denodeify(require('request'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Acceptance | Application', function() {
  this.timeout(600000);

  let app;

  before(function() {
    app = new AddonTestApp();

    return app.create('dummy', {
      fixturesPath: 'tests'
    }).then(() => {
      return app.runEmberCommand(
        'install',
        `ember-cli-fastboot@${process.env.npm_package_devDependencies_ember_cli_fastboot}`
      );
    }).then(() => {
      return app.startServer();
    });
  });

  afterEach(function() {
    return app.stopServer();
  });

  it('works', function() {
    return request({
      url: 'http://localhost:49741/foo/bar',
      headers: { 'Accept': 'text/html' }
    }).then(response => {
      expect(response.body).to.contain('foo/bar foo.bar');
    });
  });
});
