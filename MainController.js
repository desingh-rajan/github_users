var MainController = function ($scope, $location) {
  $scope.search = function (username) {
    $location.path('/user/' + username);
  };
};
githubUsers.controller('MainController', MainController);