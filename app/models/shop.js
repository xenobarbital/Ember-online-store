import DS from 'ember-data';

export default DS.Model.extend({
  shopName: DS.attr(),
  shopDetails: DS.attr(),
  shopStock: DS.attr()
});
