import Ember from 'ember';
import config from './config/environment';
import EmberMetricsRouterMixin from 'ember-metrics-mixins/mixins/router';

const Router = Ember.Router.extend(EmberMetricsRouterMixin, {
  location: config.locationType,
  rootURL: config.rootURL,

  // this verifies we don't clobber the `metrics` key for apps
  metrics() {}
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar');
  });
});

export default Router;
