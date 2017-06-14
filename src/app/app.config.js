export const AppConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider.state({
    name: 'home',
    url: '/',
    template: '<h1>{{ $ctrl.appTitle }}</h1>'
  });

  $urlRouterProvider.otherwise('/');
};
