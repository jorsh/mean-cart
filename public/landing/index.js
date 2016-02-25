module.exports = angular.module('todo.home',[])
    .controller('LandingController',['RestService', require('./controller-landing')])
    .factory('RestService',['$http','$q','CONSTANTS',require('./service-rest')]);
//  .directive('myDirective',['someDep',require('./my-directive')])
//  .factory('myFactory',['someDep',require('./my-factory')])
//  .filter('myFilter',['someDep',require('./my-filter')])
