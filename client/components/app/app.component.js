import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as List } from '../list/list.component';
import { name as Foo } from '../foo/foo.component';
import { name as Bar } from '../bar/bar.component';

import { name as Service } from '../service';

import template from './app.component.html';

const name = 'app';

class AppController {
  constructor($rootScope, $scope, $reactive, $myService) {
    'ngInject';
    this.$myService = $myService;

    $reactive(this).attach($scope);
  }
}

export { name };
export default angular
  .module(name, [
    angularMeteor,
    List,
    Foo,
    Bar,
    Service,
  ])
  .component('app', {
    bindings: {},
    template,
    controllerAs: 'vm',
    controller: AppController,
  });
