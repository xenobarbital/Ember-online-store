import Ember from 'ember';

export default Ember.Controller.extend({
    activeForm: false,
    shopName: '',
    shopDetails: '',
    isValid: Ember.computed('shopName', 'shopDetails', function() {
        return this.get('shopName').length > 5 && this.get('shopDetails').length > 5;
    }),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveShop() {
            const newShop = this.get('store').createRecord('shop', {
                shopName: this.get('shopName'),
                shopDetails: this.get('shopDetails'),
                shopStock: []
            });
            newShop.save().then(() => {
                this.set('shopName', '');
                this.set('shopDetails', '');
                this.set('activeForm', false);
            })
        },

        toggleForm() {
            if (this.get('activeForm')) {
                this.set('activeForm', false);
            } else {
                this.set('activeForm', true);
            }
        }
    }
});
