//Module PageTurner
Neo.module.PageTurner = angular.module('PageTurner',[
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);
//Config
Neo.module.PageTurner.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/signin.html',
      controller: 'Neo.controller.SignIn'
    })
    .otherwise({
      redirectTo: '/'
    });
});