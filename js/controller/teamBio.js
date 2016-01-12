(function() {
  angular.module('TeamBioDirective', [])
    .controller('TeamBioController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.members = [];
      $http.get('team.json?rand=' + Math.random())
      .then(success);

      function success(response) {
        $scope.members = response.data.members;
      }
    }])
    .directive('teamBio', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/teamBios.html'
      };
    });
})();
