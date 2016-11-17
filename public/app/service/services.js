var itemService = angular.module('itemService', []);

itemService.factory('StateService', function() {
    var message = 'Hello Message';
    var getMessage = function() {
        return message;
    };
    var setMessage = function(m) {
        message = m;
    };

    return {
        getMessage: getMessage,
        setMessage: setMessage
    }
})

itemService.factory('Tasks', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/tasks');
        },
        create: function(taskData) {
            return $http.post('/api/tasks', taskData);
        },
        delete: function(id) {
            return $http.delete('/api/tasks/' + id);
        }
    }
}]);

itemService.service('ExperimentsService', function() {
    var service = this,
        experiments = [
            { name: 'Experiment 1', description: 'This is an experiment', completed: 0 },
            { name: 'Experiment 2', description: 'This is an experiment', completed: 0 },
            { name: 'Experiment 3', description: 'This is an experiment', completed: 0 },
            { name: 'Experiment 4', description: 'This is an experiment', completed: 0 }
        ];

    service.getExperiments = function() {
        return experiments;
    };
})

itemService.directive('experiment', function() {
    var linker = function(scope, element, attrs) {
        element.on('click', function() {
            scope.doExperiment();
        })
    };

    var controller = function($scope) {
        $scope.doExperiment = function() {
            $scope.$apply(function() {
                $scope.experiment.completed++;
            });
        };
    };

    return {
        scope: true,
        restrict: 'E',
        template: '<div class="experiment">' +
            '<h3>{{experiment.name}}</h3>' +
            '<p>{{experiment.description}}</p>' +
            '<p><strong>{{experiment.completed}}</strong></p>' +
            '</div>',
        link: linker,
        controller: controller
    }
});
