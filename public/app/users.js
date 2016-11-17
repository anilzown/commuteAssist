app.controller('UserCtrl', function($scope, User, ngProgress, toaster) {

    $scope.user = new User();

    var refresh = function() {
        $scope.users = User.query();
        $scope.user = "";
    }
    refresh();

    $scope.add = function(user) {
        User.save(user, function(user) {
            refresh();
        });
    };

    $scope.update = function(user) {
        user.$update(function() {
            refresh();
        });
    };

    $scope.remove = function(user) {
        user.$delete(function() {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $scope.user = User.get({ id: id });
    };

    $scope.deselect = function() {
        $scope.user = "";
    }

})
