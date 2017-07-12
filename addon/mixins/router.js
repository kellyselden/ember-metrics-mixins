import Ember from 'ember';

let metrics;

function trackPage(infos) {
  if (!metrics) {
    metrics = Ember.getOwner(this).lookup('service:metrics');
  }

  let options = {
    url: this.get('url'),
    routeName: this.get('currentRouteName')
  };

  Ember.assign(options, this.mergeAdditionalOptions(infos));

  Ember.run.scheduleOnce('afterRender', () => {
    metrics.trackPage(options);
  });
}

export default Ember.Mixin.create({
  didTransition() {
    this._super(...arguments);

    trackPage.apply(this, arguments);
  },

  mergeAdditionalOptions() { return {}; }
});
