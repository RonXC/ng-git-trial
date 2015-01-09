/**
 * Created by Fooij on 10/12/2014.
 */

function addSubtractController($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) { $scope.counter += amount; };
    $scope.subtract = function(amount) { $scope.counter -= amount; };
};
