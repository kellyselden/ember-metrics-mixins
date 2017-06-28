# ember-metrics-mixins

[![npm version](https://badge.fury.io/js/ember-metrics-mixins.svg)](https://badge.fury.io/js/ember-metrics-mixins)
[![Build Status](https://travis-ci.org/kellyselden/ember-metrics-mixins.svg?branch=master)](https://travis-ci.org/kellyselden/ember-metrics-mixins)
![Ember Version](https://embadge.io/v1/badge.svg?start=1.13.0)

This mixin will add the `ember-metrics` boilerplate to your router.

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
