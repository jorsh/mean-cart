'use strict';
    angular
        .module('todo',['ui.router',
                      'ui.bootstrap',
                      require('./landing').name,
                      require('./todos').name])
        .config(['$stateProvider',
                 '$urlRouterProvider',
                 require('./routes')])
        .constant('CONSTANTS', require('./common/constants.js'));
