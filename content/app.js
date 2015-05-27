var app = angular.module('app', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider, $httpProvider) {
  window.routes.forEach(function (route) {
    $routeProvider.when(route.path, route);
  });

  $routeProvider.otherwise({'redirectTo': '/'});

  $locationProvider.html5Mode(true);

  // Transmit cookies.
  // As far as I know, we can't read those cookies
  // which the server sets in the response, but those
  // are being set properly, so the login works.
  $httpProvider.defaults.withCredentials = true;
});

/* Set up the title. */
app.run(function ($location, $rootScope, Session) {
  Session.development = true;

  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route ? current.$$route.title : null;
  });
});

/* Main controller. */
app.controller('MainController', function ($scope, $window, $location, $http, $modal, Links, Session, currentUser, $cookies) {
  $scope.$on('$viewContentLoaded', function (event) {
    // console.log("~ Triggering Google Analytics.");

    // if (Session.development) {
    //   $window.ga('send', 'pageview', {page: $location.path()});
    // };
  });
});
