PTApp.factory('authInterceptor', function ($rootScope, $q, $window, $location) {
	PT.util.AuthInterceptor = PT.define({
	  oType: 'PT.factory.AuthInterceptor',
	  constructor: function(config) {
	    // this.$q = config.$q;
	    // this.$window = config.$window;
	    // this.$location = config.$location;
	    // this.$rootScope = config.$rootScope;
	  },
	  request: function (config) {
	    config.headers = config.headers || {};
	    if ($window.sessionStorage.token) {
	      config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
	    }
	    return config;
	  },
	  requestError: function(rejection) {
	    return $q.reject(rejection);
	  },
	  /* Set Authentication.isAuthenticated to true if 200 received */
	  response: function (response) {
	    // if (response != null && response.status == 200 && $window.sessionStorage.token) {
	      
	    // }
	    return response;
	  },
	  responseError: function (rejection) {
	    if (rejection.status === 401) {
	      // handle the case where the user is not authenticated
	      $location.path('/signin');
	    }
	    return $q.reject(rejection);
	  }
	});
  return PT.util.AuthInterceptor;
});