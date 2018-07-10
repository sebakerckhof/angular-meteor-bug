import { name as App } from './components/app/app.component';

import Collection from './collection';

Collection.insert({
  _id: 'item',
  forcedItemId: '1',
});

window.select = function(forcedItemId = '2') {
  Collection.update('item', { $set: { forcedItemId }});
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [App], {
    strictDi: true,
  });
});
