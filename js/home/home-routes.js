(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  }
}());

//# sourceMappingURL=home-routes.js.map
