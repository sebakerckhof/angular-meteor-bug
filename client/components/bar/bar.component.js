import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './bar.component.html';

const name = 'bar';

class BarController {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.$scope = $scope;
  }

  $onInit() {
    this.$scope.$watch('vm.id', () => {
      console.log('ID CHANGED in BAR');
    });
  }
}

export { name };
export default angular
  .module(name, [
    angularMeteor,
  ])
  .component('bar', {
    bindings: {
      id: '<'
    },
    template,
    controllerAs: 'vm',
    controller: BarController,
  });
