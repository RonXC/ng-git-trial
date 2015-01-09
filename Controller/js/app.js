/**
 * Created by Fooij on 10/12/2014.
 */

var app = angular.module('AddSubtract', []);

app.controller("addSubtractController", function() {
    var self = this;

    self.counter = 0;
    self.add = function(amount) { self.counter += amount; };
    self.subtract = function(amount) { self.counter -= amount; };
})