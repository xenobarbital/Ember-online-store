import Ember from 'ember';

export default Ember.Controller.extend({
    activeForm: false,
    itemName: '',
    itemDetails: '',
    itemPrice: '',

    isValid: Ember.computed('itemName', 'itemDetails', 'itemPrice', function() {
        return (
            this.get('itemName') && this.get('itemDetails') && this.get('itemPrice')
        );
    }),

    isDisabled: Ember.computed.not('isValid'),

    actions: {
        toggleForm() {
            this.toggleProperty('activeForm');
        },

        saveItem(param) {
            let currentShop = this.get('store').peekRecord('shop', param.id);
            let newItem = this.get('store').createRecord('item', {
                itemName: this.get('itemName'),
                itemDetails: this.get('itemDetails'),
                itemPrice: this.get('itemPrice')
            });
            currentShop.get('items').pushObject(newItem);
            newItem.save().then(() => {
                currentShop.save();
                this.set('itemName', '');
                this.set('itemDetails', '');
                this.set('itemPrice', '');
                this.set('activeForm', false);
            });
        },

        deleteItem(item) {
            item.destroyRecord();
        }
    }
});
