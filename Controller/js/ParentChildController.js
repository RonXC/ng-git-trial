/**
 * Created by Fooij on 11/12/2014.
 */

var app = angular.module('ParentChild', []);

var parentCtrl = function() {
    var self = this;
    self.title = "Hello parent";
    self.person = {name: "Buddy", greeted: false};
};

var childCtrl = function() {
    var self = this;
    self.title = "Hello child";
    self.title2 = "Hello child 2";
    self.person = {name: "Ari", greeted: true};
    parentCtrl.apply(self,arguments);  // Inherit parent control

    self.sayHello = function () {
        self.title = "Hello child";
        self.person.name = "Eric";
        self.person.greeted = true;
    };
};

app.controller("parentController", [parentCtrl]);
app.controller("childController", [childCtrl]);
