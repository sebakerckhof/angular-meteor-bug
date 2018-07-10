import angular from 'angular';

const name = 'myService';

class MyService {
  constructor() {
    'ngInject';

    this.selectedSource = null;
  }
}

export { name };
export default angular
  .module(name, [])
  .service('$myService', MyService);
