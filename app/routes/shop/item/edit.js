import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('item', params.item_id);
    },

    actions: {
        saveItem(item) {
            item.save().then(() => this.transitionTo('index'));
        },

        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                let confirmation = confirm("Haven't saved yet. Leave this form?");

                if (confirmation) {
                    model.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    }
});
