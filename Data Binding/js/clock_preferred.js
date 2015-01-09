/**
 * Created by Fooij on 15/12/2014.
 */

var

var app = angular.module('clockApp', []);

var clockCtrl = function() {
    var self = this;
    self.clock = { now: new Date() };

    var updateClock = function () { self.clock.now = new Date(); };
    var applyClock  = function () { self.apply(updateClock()); };
    setInterval( applyClock() , 1000);
    updateClock();

};

app.controller("clockController", [clockCtrl]);
