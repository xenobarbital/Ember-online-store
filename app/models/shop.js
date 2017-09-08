import DS from 'ember-data';

export default DS.Model.extend({
  shopName: DS.attr('string'),
  shopDetails: DS.attr('string'),
  shopStock: DS.attr('array', {
      defaultValue() {
          return [];
      }
  })
});
