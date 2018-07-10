import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Service } from '../service';

import template from './list.component.html';
import Collection from '../../collection';

const name = 'list';

class ListController {
  constructor($scope, $reactive, $myService) {
    'ngInject';
    $reactive(this).attach($scope);
    this.$myService = $myService;
    this.$scope = $scope;
    this.items = [
      {
        id: '1',
        type: 'foo',
        value: 'Foo 1',
      },
      {
        id: '2',
        type: 'bar',
        value: 'Bar 1',
      },
      {
        id: '3',
        type: 'foo',
        value: 'Foo 2',
      },
    ];
  }

  select(item) {
    console.log('selecting', item);
    this.$myService.selectedItem = item;
  }

  $onInit() {

    this.autorun(() => {
      const item = Collection.findOne('item', { fields: { 'forcedItemId': 1, } });
      console.log('List autorun', item);
      if (item) {
        //this.$scope.$evalAsync(() => {
          this.$myService.selectedItem = this.items.find(i => i.id === item.forcedItemId);
        //});
      }
    });
  }
}

export { name };
export default angular
  .module(name, [
    angularMeteor,
    Service
  ])
  .component('list', {
    bindings: {},
    template,
    controllerAs: 'vm',
    controller: ListController,
  });
