import angular from 'angular';
import './app.module';

angular.element(() => {
  angular.bootstrap(document.getElementById('app'), ['App']);
});
