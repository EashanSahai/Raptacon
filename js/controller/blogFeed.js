(function() {
  angular.module('BlogFeedDirective', [])
    .controller('BlogFeedController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
      $scope.posts = [];
      $http.get('http://raptacon.org/?json=get_recent_posts')
      .then(success);

      function success(response) {
        $scope.posts = response.data.posts;
      }

      $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
      };
    }])
    .directive('blogFeed', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/blogFeed.html'
      };
    });
})();
