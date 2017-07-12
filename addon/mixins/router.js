import Ember from 'ember';

function trackPage() {
  Ember.run.scheduleOnce('afterRender', () => {
    this.get('metrics').trackPage({
      page: this.get('url'),
      title: this.getWithDefault('currentRouteName', 'unknown')
    });
  });
}

export default Ember.Mixin.create({
  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);

    trackPage.call(this);
  }
});
