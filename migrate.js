import { UpgradeAdapter } from 'angular2/upgrade';
var adapter = new UpgradeAdapter();
// var app = angular.module('MyApp', []);
// app.controller('MyController', MyController);
adapter.bootstrap(document.body, ['MyApp']);
