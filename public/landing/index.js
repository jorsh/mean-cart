module.exports = angular.module('todo.home',[])
    .controller('LandingController',['$http', require('./controller-landing')]);
    //.service('RestService',['$http',require('./service-rest')]);
//  .directive('myDirective',['someDep',require('./my-directive')])
//  .factory('myFactory',['someDep',require('./my-factory')])
//  .filter('myFilter',['someDep',require('./my-filter')])
