import angular from 'angular';
import AppModule from './app.module';

angular.element(() => {
  angular.bootstrap(document.getElementById('app'), [AppModule]);
});
