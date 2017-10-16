import Service from '@ember/service';

export default Service.extend({
  trackPage(options) {
    this.setProperties(options);
  }
});
