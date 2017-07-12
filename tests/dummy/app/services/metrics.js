import Ember from 'ember';

export default Ember.Service.extend({
  trackPage(options) {
    this.setProperties(options);
  }
});
