import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('about');
    this.route('stores');
    this.route('shop', function() {
        this.route('items', { path: '/:shop_id/items' });
        this.route('edit', { path: '/:shop_id/edit' });
        this.route('item', function() {
            this.route('edit', { path: '/:item_id/edit' });
        });
    });
});

export default Router;
