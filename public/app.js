'use strict';
    angular
        .module('spa',['ui.router',
                      'ui.bootstrap',
                      require('./landing').name,
                      require('./todos').name])
        .config(['$stateProvider',
                 '$urlRouterProvider',
                 require('./routes')]);
