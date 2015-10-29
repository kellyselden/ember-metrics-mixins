module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject({ name: 'ember-metrics', target: '0.5.1' });
  }
};
