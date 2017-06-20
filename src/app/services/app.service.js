export class AppService {
  constructor($timeout) {
    'ngInject';
    this.$timeout = $timeout;
  }
  getAppTitle() {
    return this.$timeout(() => 'App Works!', 200);
  }
}
