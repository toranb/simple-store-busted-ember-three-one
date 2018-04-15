import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  simpleStore: service(),
  model() {
    const id = 1;
    const simpleStore = this.get('simpleStore');
    simpleStore.push('user', {id: id, name: 'toran'});

    // this next line breaks because of ...
    // https://github.com/toranb/ember-cli-simple-store/blob/master/addon/store.js#L253
    const model = simpleStore.find('user', id);
    return model;
  }
});
