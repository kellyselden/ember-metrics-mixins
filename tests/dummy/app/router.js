import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import EmberMetricsRouterMixin from 'ember-metrics-mixins/mixins/router';

const Router = EmberRouter.extend(EmberMetricsRouterMixin, {
  location: config.locationType,
  rootURL: config.rootURL,

  // this verifies we don't clobber the `metrics` key for apps
  metrics() {},

  mergeAdditionalOptions(infos) {
    let info = infos[infos.length - 1];

    return {
      pageName: info.handler.get('pageName')
    };
  }
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar');
  });
});

export default Router;
