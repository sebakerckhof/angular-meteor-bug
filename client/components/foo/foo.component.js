import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './foo.component.html';

const name = 'foo';

class FooController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.$scope = $scope;
  }

  $onInit() {
    this.$scope.$watch('vm.id', () => {
      console.log('ID CHANGED in Foo');
    });
  }
}

export { name };
export default angular
  .module(name, [
    angularMeteor,
  ])
  .component('foo', {
    bindings: {
      id: '<',
    },
    template,
    controllerAs: 'vm',
    controller: FooController,
  });
