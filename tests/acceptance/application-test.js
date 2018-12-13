import { click, find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('it works between route transitions', async function(assert) {
    await visit('foo');

    assert.equal(find('#foo').textContent.trim(), 'foo foo.index foo');

    await click('a');

    assert.equal(find('#foo-bar').textContent.trim(), '/foo/bar foo.bar foo-bar');
  });

  let oldMetricsService;

  test('it doesn\'t cache the metrics service - part 1 of 2', async function(assert) {
    await visit('/');

    let metrics = this.owner.lookup('service:metrics');

    assert.notEqual(metrics, oldMetricsService);

    oldMetricsService = metrics;
  });

  test('it doesn\'t cache the metrics service - part 2 of 2', async function(assert) {
    await visit('/');

    let metrics = this.owner.lookup('service:metrics');

    assert.notEqual(metrics, oldMetricsService);

    oldMetricsService = metrics;
  });
});
