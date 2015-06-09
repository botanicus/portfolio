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
  if ($location.host() == 'botanicus.me' && $window.ga) {
    $window.ga('create', 'UA-63572342-1');
    $rootScope.$on('$routeChangeSuccess', function () {
      $window.ga('send', 'pageview', $location.path());
    });
  }
});


app.controller('MainController', function ($scope) {
  $scope.email = 'contracts@101ideas.cz';
  $scope.emailSubject = "I like your portfolio. We should talk!";
  $scope.emailBody = "Hi James,\n\nI'm [YOUR NAME] from [YOUR COMPANY].\n\nWe're currently looking for Ruby contractors and I wonder if you'd be interested.\n\nYou can find more at [LINK].\n\nHow about we have a quick chat on Skype? My Skype is [SKYPE ID].\n\nThanks!";
  $scope.year = new Date().getFullYear();
});

app.controller('IndexController', function ($scope, $http) {
  $scope.rubyYears = $scope.year - 2008;
  $scope.jsYears = $scope.year - 2009;
  $scope.angularYears = $scope.year - 2013;

  $scope.rate = 475;
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

app.filter('encodeURIComponent', function ($window) {
  return $window.encodeURIComponent;
});
