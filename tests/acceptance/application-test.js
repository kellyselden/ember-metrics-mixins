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
