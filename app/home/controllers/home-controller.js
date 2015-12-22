(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(Api, $modal, $cookies) {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.currentUser = 0;
    vm.data = {};

    vm.user = {};

    Api.getUsers(function(response){
      vm.users = response;
    });

    vm.register = function() {
      vm.data = {
        email: vm.user.email,
        firstname: vm.user.firstname,
        lastname: vm.user.lastname,
        password:vm.user.password
      };
      Api.setUser(vm.data, function(response){
        Api.getUsers(function(response){
          vm.users = response;
        });
      });
    };

    vm.delete =function(id) {
      Api.deleteUser(id, function(response){
        console.log(response);
      });
    };

  }
}());
