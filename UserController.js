var UserController = function ($scope, $routeParams, github) {
  $scope.reposSortOrder = '-stargazers_count';
  $scope.username = $routeParams.username;

  var onError = function (data) {
    $scope.error = 'Could not fetch the data'
  };

  var onRepos = function (data) {
    $scope.repos = data
  };

  var onUserComplete = function (data) {
    $scope.user = data;
    github.repos($scope.user).then(onRepos, onError);
  };

  github.user($scope.username).then(onUserComplete, onError);

};

githubUsers.controller('UserController', UserController);