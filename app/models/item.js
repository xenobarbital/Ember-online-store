import DS from 'ember-data';

export default DS.Model.extend({
  itemName: DS.attr(),
  itemDetails: DS.attr(),
  itemPrice: DS.attr(),
  parentShop: DS.belongsTo('shop')
});
