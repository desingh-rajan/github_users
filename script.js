var githubUsers = angular.module('githubUsers', []);

var MainController = function ($scope, github) {
  $scope.message = 'Search Github Users!';
  $scope.reposSortOrder = '-stargazers_count';

  $scope.search = function (username) {
    github.user(username).
        then(function (data) {
          $scope.user = data;
          github.repos($scope.user).
              then(function (data) {
                $scope.repos = data
              }, function (data) {
                $scope.error = 'Could not fetch repos'
              });
        }, function (data) {
          $scope.error = 'Could not fetch user details'
        });
  };
};
githubUsers.controller('MainController', MainController);