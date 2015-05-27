var app = angular.module('app', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'MainController',
      templateUrl: 'templates/index.html',
      title: 'TITLE',
    });

  $routeProvider.otherwise({'redirectTo': '/'});

  $locationProvider.html5Mode(true);
});

/* Set up the title. */
app.run(function ($location, $rootScope) {
// app.run(function ($location, $rootScope, Session) {
  // Session.development = true;

  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route ? current.$$route.title : null;
  });
});

/* Main controller. */
app.controller('MainController', function ($scope, $window, $location) {
  // $scope.$on('$viewContentLoaded', function (event) {
  //   console.log("~ Triggering Google Analytics.");

  //   if (Session.development) {
  //     $window.ga('send', 'pageview', {page: $location.path()});
  //   };
  // });
});
