# ember-metrics-mixins

[![npm version](https://badge.fury.io/js/ember-metrics-mixins.svg)](https://badge.fury.io/js/ember-metrics-mixins)

This mixin will add the boilerplate to your router.

## Installation

`ember install ember-metrics-mixins`

## Usage

Just add this to your `app/router.js`:

```js
import EmberMetricsRouterMixin from 'ember-metrics-mixins/mixins/router';

const Router = Ember.Router.extend(EmberMetricsRouterMixin, {
  //...
});
```
