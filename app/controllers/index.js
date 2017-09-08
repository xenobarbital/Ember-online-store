import Ember from 'ember';

export default Ember.Controller.extend({
    activeForm: false,
    shopName: '',
    shopDetails: '',

    isValid: Ember.computed('shopName', 'shopDetails', function() {
        return this.get('shopName') && this.get('shopDetails');
    }),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveShop() {
            const newShop = this.get('store').createRecord('shop', {
                shopName: this.get('shopName'),
                shopDetails: this.get('shopDetails'),
                // shopStock: []
                // shopStock: [{
                //     name: 'test',
                //     description: 'test',
                //     price: 123
                // }]
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
        },

        deleteShop(shop) {
            shop.destroyRecord();
        }
    }
});
