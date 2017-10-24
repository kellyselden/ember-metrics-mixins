import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('it works between route transitions', function(assert) {
  visit('foo');

  andThen(function() {
    assert.equal(find('#foo').text().trim(), 'foo foo.index foo');
  });

  click('a');

  andThen(function() {
    assert.equal(find('#foo-bar').text().trim(), '/foo/bar foo.bar foo-bar');
  });
});

let oldMetricsService;

test('it doesn\'t cache the metrics service - part 1 of 2', function(assert) {
  visit('/');

  let metrics = this.application.__container__.lookup('service:metrics');

  assert.notEqual(metrics, oldMetricsService);

  oldMetricsService = metrics;
});

test('it doesn\'t cache the metrics service - part 2 of 2', function(assert) {
  visit('/');

  let metrics = this.application.__container__.lookup('service:metrics');

  assert.notEqual(metrics, oldMetricsService);

  oldMetricsService = metrics;
});
