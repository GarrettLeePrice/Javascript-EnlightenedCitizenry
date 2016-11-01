import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    billLookup() {
      this.transitionTo('bills');
    },

    houseLookup() {
      this.transitionTo('committee-house');
    },
    senateLookup() {
      this.transitionTo('committee');
    },
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
