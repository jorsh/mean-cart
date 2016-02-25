
'use strict';
/**
 * Service to implement HTTP methods
 *
 * @category  factory
 * @author    Jorge Arenas
 * @example   Inject the service as dependency and use like this
 *
 RestService.request('GET', 'url/posts', {get: query}, {post: params})
 .then(function(response) {
		console.log(response.data);
	}, function(error) {
		console.log(error);
});
 *
 *
 */
function RestSrv($http,$q,CONSTANTS){
    return {
        request : request
    };

    function request(method, url, params, data){
        var deferred = $q.defer();

        $http({
            method: method,
            url: CONSTANTS.API_URL + url,
            params: params,
            data: data
        }).then(function(data) {
            if (!data.config) {
                console.error('Server Error');
            }
            deferred.resolve(data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    } //End request Function
}

module.exports = RestSrv;

//'use strict';
//function RestService($http){
//    var self = this;
//    self.getTasks = function(){
//        $http({
//            method: 'GET',
//            url: 'http://localhost:3000/tasks'
//        }).then(function successCallback(response) {
//            self.tasks = response.data;
//            console.log(self.tasks);
//            // this callback will be called asynchronously
//            // when the response is available
//        }, function errorCallback(response) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//    };
//
//    function addTask(){
//        $http({
//            method: 'POST',
//            url: 'http://localhost:3000/task',
//            data: {name: self.txtTask}
//        }).then(function successCallback(response) {
//            //self.tasks = response.data;
//            console.log(self.tasks);
//            self.txtTask = '';
//            self.getTasks();
//            // this callback will be called asynchronously
//            // when the response is available
//        }, function errorCallback(response) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//    }
//
//    self.removeTask = function(index){
//        var taskId = self.tasks[index]._id;
//        $http({
//            method: 'DELETE',
//            url: 'http://localhost:3000/task/' + taskId
//        }).then(function successCallback(response) {
//            //self.tasks = response.data;
//            console.log(self.tasks);
//            self.getTasks();
//            // this callback will be called asynchronously
//            // when the response is available
//        }, function errorCallback(response) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//    };
//
//
//    self.preEditTask = function(index) {
//        self.txtTask = self.tasks[index].name;
//        self.postLabel = 'Edit Task';
//        self.action = 'edit';
//        self.taskId = self.tasks[index]._id;
//    };
//
//    self.postAction = function () {
//        if(self.action === 'edit'){
//            editTask(self.taskId);
//            self.postLabel = 'Add Task';
//            self.txtTask = '';
//        } else {
//            addTask();
//        }
//    };
//
//    function editTask(taskId){
//
//        $http({
//            method: 'PUT',
//            url: 'http://localhost:3000/task/' + taskId,
//            data: {name: self.txtTask}
//        }).then(function successCallback(response) {
//            self.getTasks();
//            // this callback will be called asynchronously
//            // when the response is available
//        }, function errorCallback(response) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//    }
//}
//
//module.exports = RestService;
