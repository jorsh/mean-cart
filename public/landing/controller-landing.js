'use strict';
function LandingController(RestService){
    var self = this;
    var url = '/tasks';
    self.heading = 'My List';
    self.tasks = [];
    self.txtTask = '';
    self.postLabel = 'Add Task';
    self.taskId = '';


    // Methods
    self.editAction = function(index) {
        self.txtTask = self.tasks[index].name;
        self.postLabel = 'Edit Task';
        self.action = 'edit';
        self.taskId = self.tasks[index]._id;
    };

    self.postAction = function () {
        if(self.action === 'edit'){
            editTask(self.taskId);
            self.postLabel = 'Add Task';
            self.txtTask = '';
        } else {
            addTask();
        }
    };

    self.getTasks = function(){
        RestService.request('GET', url, {}, {})
            .then(function(response) {
                self.tasks = response.data;
            }, function(error) {
                console.log(error);
            });
    };

    self.removeTask = function(index){
        var taskId = self.tasks[index]._id;

        RestService.request('DELETE', '/task/'+taskId, {}, {})
            .then(function() {
                self.getTasks();
            }, function(error) {
                console.log(error);
            });
    };

    function addTask(){
        RestService.request('POST', '/task',{}, {name: self.txtTask})
            .then(function() {
                self.txtTask = '';
                self.getTasks();
            }, function(error) {
                console.log(error);
            });
    }

    function editTask(taskId){
        RestService.request('PUT', '/task/'+taskId, {}, {name: self.txtTask})
            .then(function() {
                self.txtTask = '';
                self.action = '';
                self.getTasks();
            }, function(error) {
                console.log(error);
            });
    }

    // Get tasks at first
    self.getTasks();
    }

module.exports = LandingController;
