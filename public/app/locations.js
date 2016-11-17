app.controller('LocationsCtrl', function($scope, Location, ngProgress, toaster) {

$scope.location = new Location();

var refresh = function() {
  $scope.locations = Location.query(); 
  $scope.location ="";
}
refresh();

$scope.add = function(location) {
  Location.save(location,function(location){
    refresh();
  });
};

$scope.update = function(location) {
  location.$update(function(){
    refresh();
  });
};

$scope.remove = function(location) {
  location.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.location = Location.get({ id: id });
};  

$scope.deselect = function() {
  $scope.location = "";
}

})