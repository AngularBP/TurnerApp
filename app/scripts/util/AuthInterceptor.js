PT.util.AuthInterceptor = PT.define({
  oType: 'PT.factory.AuthInterceptor',
  constructor: function(config) {
    this.$q = config.$q;
    this.$window = config.$window;
    this.$location = config.$location;
    this.$rootScope = config.$rootScope;
  },
  request: function (config) {
    config.headers = config.headers || {};
    if (this.$window.sessionStorage.token) {
      config.headers.Authorization = 'Bearer ' + this.$window.sessionStorage.token;
    }
    return config;
  },
  requestError: function(rejection) {
    return this.$q.reject(rejection);
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
      this.$location.path('/signin');
    }
    return this.$q.reject(rejection);
  }
});