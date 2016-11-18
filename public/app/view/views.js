angular.module('website', ['ngRoute']).
config(function($routeProvider) {
    $routeProvider.
        // when('/about', {templateUrl: 'partials/about.html'}).
        // when('/experiments', {templateUrl: 'partials/experiments.html'}).
        // when('/home', {templateUrl: 'partials/new.html'}).
        // when('/tasklist', {templateUrl: 'partials/tasklist.html'}).
        // when('/taskdetail', {templateUrl: 'partials/taskdetail.html'}).
    when('/login', { templateUrl: 'partials/ca-login.html' }).
    when('/profile', { templateUrl: 'partials/ca-userprofile.html' }).
    when('/commutetracker', { templateUrl: 'partials/ca-commutetracker.html' }).
        // when('/googleLogin', {templateUrl: 'partials/googleLogin.html'}).
    when('/location', { templateUrl: 'partials/location.html' }).
        // when('/googleSignOut', {templateUrl: 'partials/googleSignOut.html'}).

    otherwise({ redirectTo: '/login' });
})
