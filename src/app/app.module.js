import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppConfig } from './app.config';
import { AppComponent } from './components/app.component';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

export const App = angular.module('App', [uiRouter])
  .config(AppConfig)
  .component('app', AppComponent)
  .controller('appCtrl', AppController)
  .service('appService', AppService);

export default 'App';
