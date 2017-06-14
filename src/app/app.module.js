import angular from 'angular';
import '@uirouter/angularjs';

import { AppConfig } from './app.config';
import { AppComponent } from './components/app.component';

export const App = angular.module('App', ['ui.router'])
  .config(AppConfig)
  .component('app', AppComponent);
