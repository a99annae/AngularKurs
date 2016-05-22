/*global angular */

(function(module){
   'use strict'
    module.directive('week',WeekDirective);
    module.directive('weekday',WeekDayDirective);
   
    function WeekDayDirective()
    {
        return{
            restrict:'E',
            scope:{
               
               day:'=',
               selected:'&'
            },
            template:` 
                Day:{{day}} <br> 
                <button ng-click=selected()>select day</button> <br> 
            `
        };
    };
   
    function WeekDirective()
    {
        return{
            restrict:'E',
          
            controller:'weekDaysController',
            templateUrl:'weekdays/weekdays.html'
        };
    };
})(angular.module('app'),['weekDaysController']);