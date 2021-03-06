angular
.module('filmApp', ['ngResource', 'ui.router', 'satellizer', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.config(Router)
.config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/templates/home.html'
  })
  .state('gift-cards', {
    url: '/gift-cards',
    templateUrl: '/templates/gift-cards.html'
  })
  .state('filmsIndex', {
    url: '/films',
    templateUrl: '/templates/filmsIndex.html',
    controller: 'FilmsIndexController as filmsIndex'
  })
  .state('filmsNew', {
    url: '/films/new',
    templateUrl: '/templates/filmsNew.html',
    controller: 'FilmsNewController as filmsNew'
  })
  .state('filmsShow', {
    url: '/films/:id',
    templateUrl: '/templates/filmsShow.html',
    controller: 'FilmsShowController as filmsShow'
  })
  .state('filmsEdit', {
    url: '/films/:id/edit',
    templateUrl: '/templates/filmsEdit.html',
    controller: 'FilmsEditController as filmsEdit'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginController as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  });

  $urlRouterProvider.otherwise('/films');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
}
