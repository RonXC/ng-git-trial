/**
 * Created by Fooij on 11/12/2014.
 */

var app = angular.module('notesApp', []);

app.controller('MainCtrl', [function() {
    var self = this;
    self.message= 'Hello ';
    self.changeMessage = function() {
        self.message = 'Goodbye';
    };
}]);
