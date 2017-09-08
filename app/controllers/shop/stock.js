import Ember from 'ember';

export default Ember.Controller.extend({
    activeForm: false,
    itemName: '',
    itemDescription: '',
    itemPrice: '',

    isValid: Ember.computed('itemName', 'itemDescription', 'itemPrice', function() {
        return (
            this.get('itemName') && this.get('itemDescription') && this.get('itemPrice')
        );
    }),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
        saveItem() {
            const newItem = {
                name: this.get('itemName'),
                description: this.get('itemDescription'),
                price: this.get('itemPrice')
            };
            // *** stuck here ***
        },

        toggleForm() {
            if (this.get('activeForm')) {
                this.set('activeForm', false);
            } else {
                this.set('activeForm', true);
            }
        },
    }
});
