var RaptaconApp = angular.module('RaptaconApp', [
  'ngRoute',
  'BlogFeedDirective',
  'TeamBioDirective',
  'MentorsBioDirective'
]);

RaptaconApp.controller('RaptaconController', function ($scope) {
  $scope.lastItem = "homeMenu";
  $scope.go = function(menuID) {
    $('#' + menuID).addClass('active');
    if ( $scope.lastItem !== menuID) {
      $('#' + $scope.lastItem).removeClass('active');
    }
    $scope.lastItem = menuID;
  }
});

RaptaconApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'RaptaconController'
      }).
      when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'RaptaconController'
      }).
      when('/communications', {
        templateUrl: 'partials/communications.html',
        controller: 'RaptaconController'
      }).
      when('/calendar', {
        templateUrl: 'partials/calendar.html',
        controller: 'RaptaconController'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'RaptaconController'
      }).
      when('/team', {
        templateUrl: 'partials/team.html',
        controller: 'RaptaconController'
      }).
      when('/mentors', {
        templateUrl: 'partials/mentors.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage', {
        templateUrl: 'partials/scrimmage.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/video', {
        templateUrl: 'partials/scrimmage/video.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/gameRules', {
        templateUrl: 'partials/scrimmage/gameRules.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/questions', {
        templateUrl: 'partials/scrimmage/questions.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/answers', {
        templateUrl: 'partials/scrimmage/answers.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/rsvp', {
        templateUrl: 'partials/scrimmage/rsvp.html',
        controller: 'RaptaconController'
      }).
      when('/scrimmage/updates', {
        templateUrl: 'partials/scrimmage/updates.html',
        controller: 'RaptaconController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
