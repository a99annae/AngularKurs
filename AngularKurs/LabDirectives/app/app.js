/* global angular */
(function (module) {
    
   module.config(['$routeProvider', function ($routeProvider) {
       $routeProvider
       .when("/",
       {
          templateUrl:"default.html",
         
       })
       .when("/products",
       {
          template:"products",
         
       });
   }])
    
})(angular.module('app',['ngRoute']));