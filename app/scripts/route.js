//Config
Neo.PageTurner.config(function ('$stateProvider','$urlRouterProvider') {
  $urlRouterProvider.otherwise('/signin');
  $stateProvider
    .state('signin', {
      url: '/signin'
      templateUrl: 'views/signin.html',
      controller: 'Neo.controller.SignIn'
    })
    .state('signup', {
      url: '/signup'
      templateUrl: 'views/signup.html',
      controller: 'Neo.controller.SignUp'
    }).state('category', {
      url: '/category'
      templateUrl: 'views/category.html',
      controller: 'Neo.controller.Category'
    }).state('book', {
      url: '/category/book'
      templateUrl: 'views/book.html',
      controller: 'Neo.controller.Book'
    }).state('page', {
      url: '/category/book/page'
      templateUrl: 'views/page.html',
      controller: 'Neo.controller.Page'
    });
});