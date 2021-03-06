(function () {
  'use strict';

  angular
    .module('activities')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/:id/activities', {
        templateUrl: 'activities/views/activities.tpl.html',
        controller: 'ActivitiesCtrl',
        controllerAs: 'activities'
      });
  }
}());

//# sourceMappingURL=activities-routes.js.map
