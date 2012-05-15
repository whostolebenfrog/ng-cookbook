'use strict';

// Declare app level module which depends on filters, and services
angular.module('cookbook', ['cookbook.filters', 'cookbook.services', 'cookbook.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/form', {template: 'partials/form.html', controller: FormController});
    $routeProvider.when('/view2', {template: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
