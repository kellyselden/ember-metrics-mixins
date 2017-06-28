import Ember from 'ember';

export default Ember.Mixin.create({
  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.get('metrics').trackPage({
        page: this.get('url'),
        title: this.get('currentRouteName')
      });
    });
  }
});
