import angular from 'angular';
import { AppComponent } from './components/app.component';

export const App = angular.module('App', [])
  .component('app', AppComponent);
