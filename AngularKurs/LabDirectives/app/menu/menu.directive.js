/*global angular */
(function(module){
    'use strict';
    module.directive('menu',function()
    {
       return {
           restrict:'E', 
           scope:{}, 
           link:function (scope) {
             scope.menuItems=['Home','products','About'] ;
           },
           template:"<li ng-repeat='menuItem in menuItems'>{{menuItem}}</li>" 
        };  
    });
})(angular.module('app'));
    
