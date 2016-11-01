import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    houseLookup() {
      this.sendAction('houseLookup');
    },
    senateLookup() {
      this.sendAction('senateLookup');
    },
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    }
  }
});
