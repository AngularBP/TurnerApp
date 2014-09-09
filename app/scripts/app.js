//Module PageTurner
Neo.PageTurner = angular.module('PageTurner',[
  'ngRoute'
]);
//Config
Neo.PageTurner.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/signin.html',
      controller: 'Neo.controller.SignIn'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'Neo.controller.SignUp'
    })
    .otherwise({
      redirectTo: '/'
    });
});