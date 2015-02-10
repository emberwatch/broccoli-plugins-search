import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

if (config.analyticsEnabled) {
  Router.reopen({
    sendGoogleAnalyticsEntry: function() {
      return window.ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }.on('didTransition')
  });
}

Router.map(function () {
  this.resource('packages', { path: '/' }, function () {
    this.route('list', { path: '/' });
  });
});

export default Router;
