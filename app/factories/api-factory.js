(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name pacemaker.factory:Api
   *
   * @description
   *
   */
  angular
    .module('pacemaker')
    .factory('Api', Api);

  function Api($http, apiUrl) {
    var ApiBase = {};
    ApiBase.someValue = 'Api';
    ApiBase.someMethod = function () {
      // console.log(apiUrl);
      return 'Api';
    };
    ApiBase.getUsers = function (callback) {
      return $http.get(apiUrl +'users', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for GET to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };
    ApiBase.setUser = function (data, callback) {
      return $http.post(apiUrl +'users', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for POST to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };
    ApiBase.deleteUsers = function (callback) {
      return $http.delete(apiUrl +'users', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for DELETE to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };
    ApiBase.deleteUser = function(id , callback){
      return $http.delete(apiUrl +'users/'+id, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for DELETE to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };

    ApiBase.getActivities = function(id , callback){
      return $http.get(apiUrl +'users/'+id+ '/activities', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for GET to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };

    ApiBase.setActivities = function(id , data, callback){
      return $http.post(apiUrl +'users/'+id+ '/activities', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for GET to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };

    ApiBase.deleteActivity = function(user, id , callback){
      return $http.delete(apiUrl +'users/'+user+ '/activities/'+id, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function successCallback(response) {
        callback(response);
      }, function errorCallback(response) {
        console.log('FAILURE for DELETE to [' + apiUrl + 'users' + ']: ', response);
        callback(response);
      });
    };




    return ApiBase;
  }
}());
