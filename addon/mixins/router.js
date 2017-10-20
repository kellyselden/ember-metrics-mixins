import Mixin from '@ember/object/mixin';
import { scheduleOnce } from '@ember/runloop';
import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';

let metrics;

function trackPage(infos) {
  if (!metrics) {
    metrics = getOwner(this).lookup('service:metrics');
  }

  scheduleOnce('afterRender', () => {
    let options = {
      url: this.get('url'),
      routeName: this.get('currentRouteName')
    };

    assign(options, this.mergeAdditionalOptions(infos));

    metrics.trackPage(options);
  });
}

export default Mixin.create({
  didTransition() {
    this._super(...arguments);

    trackPage.apply(this, arguments);
  },

  mergeAdditionalOptions() { return {}; }
});
