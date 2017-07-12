import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting foo/bar', function(assert) {
  visit('foo/bar');

  andThen(function() {
    assert.equal(find('#foo-bar').text().trim(), 'foo/bar foo.bar foo-bar');
  });
});
