(function () {
  'use strict';

  angular
    .module('pacemaker')
    .config(config);

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}());
