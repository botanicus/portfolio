var app = angular.module('app', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'IndexController',
      templateUrl: 'templates/index.html'
    });

  $routeProvider.otherwise({'redirectTo': '/'});

  $locationProvider.html5Mode(true);
});

// Set up Google Analytics.
app.run(function ($rootScope, $window, $location) {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/domains
  var isIP = $location.host().match(/^(\d+\.)+\d+$/);
  var cookieDomain = isIP ? 'none' : 'auto';
  $window.ga('create', 'UA-8433562-1', cookieDomain);
  $rootScope.$on('$routeChangeSuccess', function () {
    $window.ga('send', 'pageview', $location.path());
  });
});


/* Main controller. */
app.controller('MainController', function ($scope, $window, $location) {});

app.controller('IndexController', function ($scope, $http) {
  var thisYear = new Date().getFullYear();
  $scope.rubyYears = thisYear - 2008;
  $scope.jsYears = thisYear - 2009;
  $scope.angularYears = thisYear - 2013;

  $http.get('https://api.github.com/users/botanicus').
    success(function (data, status, headers, config) {
      $scope.githubRepos = data.public_repos;
    });
});
