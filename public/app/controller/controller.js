 // var Task = require('./public/app/models/task');

var taskController = angular.module('taskController', []);

taskController.controller('AboutCtrl', function($scope, StateService) {
    $scope.title = 'About Page';
    $scope.body = 'This is the about page body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function(m) {
        StateService.setMessage(m);
    };
})

taskController.controller('ExperimentsCtrl', function($scope, StateService, ExperimentsService) {
    $scope.title = 'Experiments Page';
    $scope.body = 'This is the about experiments body';

    $scope.message = StateService.getMessage();
    $scope.experiments = ExperimentsService.getExperiments();

    $scope.updateMessage = function(m) {
        StateService.setMessage(m);
    };
})

taskController.controller('HomeCtrl', function($scope, StateService) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the about home body';

    $scope.message = StateService.getMessage();

    $scope.updateMessage = function(m) {
        StateService.setMessage(m);
    };
})


// inject the Task service factory into our controller
taskController.controller('mainController', ['$scope','$location', '$http', 'Tasks', function($scope, $location,$http, Tasks) {
    // $scope.setRoute=function(route){
    //     $location.path(route);
    // }
    
    $scope.formData = {};
    $scope.loading = true;

    // GET =====================================================================
    // when landing on the page, get all tasks and show them
    // use the service to get all the tasks
    Tasks.get()
        .success(function(data) {
            $scope.tasks = data;
            $scope.loading = false;
        });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createTask = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData.title != undefined) {
            $scope.loading = true;

            // call the create function from our service (returns a promise object)
            Tasks.create($scope.formData)

            // if successful creation, call our get function to get all the new tasks
            .success(function(data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.tasks = data; // assign our new list of tasks
            });
        }
    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteTask = function(id) {
        $scope.loading = true;

        Tasks.delete(id)
            // if successful creation, call our get function to get all the new tasks
            .success(function(data) {
                $scope.loading = false;
                $scope.tasks = data; // assign our new list of tasks
            });
    };
}]);


