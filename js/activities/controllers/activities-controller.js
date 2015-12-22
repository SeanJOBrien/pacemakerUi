(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activities.controller:ActivitiesCtrl
   *
   * @description
   *
   */
  angular
    .module('activities')
    .controller('ActivitiesCtrl', ActivitiesCtrl);

  function ActivitiesCtrl(Api, $routeParams) {
    var vm = this;
    vm.ctrlName = 'ActivitiesCtrl';
    vm.userId = $routeParams.id;
    vm.activitiesList = {};
    vm.data = {};
    vm.activity = {};

    Api.getActivities(vm.userId, function(response){
      vm.activitiesList = response;
    });

    vm.register = function() {
      vm.data = {
        type: vm.activity.type,
        location: vm.activity.location,
        distance: vm.activity.distance,
      };
      Api.setActivities(vm.userId,vm.data, function(response){
        Api.getActivities(vm.userId,function(response){
          vm.activitiesList = response;
        });
      });
    };

    vm.delete =function(id) {
      Api.deleteActivity(vm.userId, id, function(response){
        console.log(response);
      });
    };


  }
}());

//# sourceMappingURL=activities-controller.js.map
