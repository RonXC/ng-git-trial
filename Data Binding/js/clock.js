/**
 * Created by Fooij on 10/12/2014.
 */

function MyController($scope) {
    $scope.clock = { now: new Date() };
    var updateClock = function () { $scope.clock.now  = new Date(); };
    var applyClock  = function () { $scope.$apply(updateClock); };
    setInterval( applyClock , 1000);
    updateClock();
};
