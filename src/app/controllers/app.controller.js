export class AppController {
  constructor(appService) {
    'ngInject';
    appService.getAppTitle().then(title => this.appTitle = title);
  }
}
