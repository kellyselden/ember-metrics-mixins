import Ember from 'ember';

let metrics;

function trackPage() {
  if (!metrics) {
    metrics = Ember.getOwner(this).lookup('service:metrics');
  }

  Ember.run.scheduleOnce('afterRender', () => {
    metrics.trackPage({
      url: this.get('url'),
      routeName: this.get('currentRouteName')
    });
  });
}

export default Ember.Mixin.create({
  didTransition() {
    this._super(...arguments);

    trackPage.call(this);
  }
});
