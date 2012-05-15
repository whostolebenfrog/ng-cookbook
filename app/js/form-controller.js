function FormController($scope) {
    $scope.name = "name";
    $scope.age = 23;

    $scope.state = true;

    $scope.updateState = function(newState) {
        $scope.state = newState;
    };
}
