angular.module('website', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/about', {templateUrl: 'partials/about.html'}).
            when('/experiments', {templateUrl: 'partials/experiments.html'}).
            when('/home', {templateUrl: 'partials/new.html'}).
            when('/tasklist', {templateUrl: 'partials/tasklist.html'}).
            when('/taskdetail', {templateUrl: 'partials/taskdetail.html'}).
            when('/login', {templateUrl: 'partials/login.html'}).
              when('/googleLogin', {templateUrl: 'partials/googleLogin.html'}).
              when('/googleSignOut', {templateUrl: 'partials/googleSignOut.html'}).
              
            otherwise({redirectTo: '/home'});
    })
    