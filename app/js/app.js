'use strict';

// Declare app level module which depends on filters, and services
angular.module('cookbook', ['cookbook.filters', 'cookbook.services', 'cookbook.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/form', {template: 'partials/form.html', controller: FormController});
    $routeProvider.when('/view2', {template: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/modal-dialog/:detail', {template: 'partials/modal-dialog.html', controller: ModalDialog});
    $routeProvider.when('/modal-dialog', {template: 'partials/modal-dialog.html', controller: ModalDialog});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
