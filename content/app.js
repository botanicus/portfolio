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
  var isIP = $location.host().match(/^(\d+\.)+\d+$/);
  var cookieDomain = isIP ? 'none' : 'auto';
  $window.ga('create', 'UA-63572342-1', cookieDomain);
  $rootScope.$on('$routeChangeSuccess', function () {
    $window.ga('send', 'pageview', $location.path());
  });
});


app.controller('MainController', function () {});

app.controller('IndexController', function ($scope, $http) {
  var thisYear = new Date().getFullYear();
  $scope.rubyYears = thisYear - 2008;
  $scope.jsYears = thisYear - 2009;
  $scope.angularYears = thisYear - 2013;

  $scope.rate = 500;
  $scope.discountedRate = Math.round(500 * 0.8);

  $http.get('http://api.fixer.io/latest?base=GBP&symbols=USD').
    success(function (data, status, headers, config) {
      $scope.rateInUSD = Math.round(($scope.rate / 8.0) * data.rates.USD);
      $scope.discountedRateInUSD = Math.round($scope.rateInUSD * 0.8);
    });

  $http.get('https://api.github.com/users/botanicus').
    success(function (data, status, headers, config) {
      $scope.githubRepos = data.public_repos;
    });
});
