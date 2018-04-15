import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { attr, Model } from 'ember-cli-simple-store/model';

export default Model.extend({
  name: attr(),
  simpleStore: service(),
  role: alias('belongs_to.firstObject'),
  belongs_to: computed(function() {
    let user_id = this.get('id');
    let store = this.get('simpleStore');
    let filter = function(role) {
      let users = role.get('users');
      return users.indexOf(user_id) > -1;
    };
    return store.find('role', filter);
  }),
  change_role() {
    //this seems to be the problem in ember 3.1
  }
});
