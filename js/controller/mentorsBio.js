(function() {
  angular.module('MentorsBioDirective', [])
    .controller('MentorsBioController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.members = [];
      $http.get('mentors.json?rand=' + Math.random())
      .then(success);

      function success(response) {
        $scope.members = response.data.members;
      }
    }])
    .directive('mentorsBio', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/mentorsBios.html'
      };
    });
})();
