PTApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/signin');

    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'views/signin.html',
        controller: 'PT.controller.SignIn'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'PT.controller.SignUp'
      });
      // .state('category', {
      //   url: '/category',
      //   templateUrl: 'views/category.html',
      //   controller: 'PT.controller.Category'
      // }).state('book', {
      //   url: '/category/book',
      //   templateUrl: 'views/book.html',
      //   controller: 'PT.controller.Book'
      // }).state('page', {
      //   url: '/category/book/page',
      //   templateUrl: 'views/page.html',
      //   controller: 'PT.controller.Page'
      // });

    $httpProvider.interceptors.push('authInterceptor');

});