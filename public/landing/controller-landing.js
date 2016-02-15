'use strict';
function LandingController($http){
    var self = this;
    self.heading = 'My List';
    self.tasks = ['item1'];
    self.txtTask = '';

    self.getTasks = function(){
        $http({
            method: 'GET',
            url: 'http://localhost:3000/tasks'
        }).then(function successCallback(response) {
            self.tasks = response.data;
            console.log(self.tasks);
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    self.addTask = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:3000/task',
            data: {name: self.txtTask}
        }).then(function successCallback(response) {
            //self.tasks = response.data;
            console.log(self.tasks);
            self.getTasks();
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };

    self.getTasks();


}
module.exports=LandingController;
