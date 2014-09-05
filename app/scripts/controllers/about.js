'use strict';

/**
 * @ngdoc function
 * @name turnerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the turnerAppApp
 */
angular.module('turnerAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
