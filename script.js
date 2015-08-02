var githubUsers = angular.module('githubUsers', []);

var MainController = function ($scope, $http) {
  $scope.message = 'Search Github Users!';

  $scope.search = function (username) {
    $http.get('https://api.github.com/users/' + username).
        success(function (data) {
          $scope.person = data;
        }).
        error(function (data) {
          $scope.error = 'Could not get user details'
        })
  };
};

githubUsers.controller('MainController', ['$scope', '$http', MainController]);