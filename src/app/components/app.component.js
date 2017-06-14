export const AppComponent = {
  bindings: {
    appTitle: '@'
  },
  template: `
    <h1>{{ $ctrl.appTitle }}</h1>
  `
};
