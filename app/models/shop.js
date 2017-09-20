import DS from 'ember-data';

export default DS.Model.extend({
  shopName: DS.attr(),
  shopDetails: DS.attr(),
  items: DS.hasMany('item')
});
