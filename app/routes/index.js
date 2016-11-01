import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
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
