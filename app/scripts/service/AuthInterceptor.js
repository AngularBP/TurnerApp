PTApp.factory('authInterceptor', function ($rootScope, $q, $window, $location) {
  return new PT.util.AuthInterceptor({$rootScope:$rootScope,$q:$q,$window:$window,$location:$location});
});