'use strict';
function RestService($http){
    var self = this;
    self.heading = 'My List';
    self.tasks = ['item1'];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/tasks'
    }).then(function successCallback(response) {
        self.tasks = response.data;
        console.log(self.tasks)
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}
module.exports = RestService;
