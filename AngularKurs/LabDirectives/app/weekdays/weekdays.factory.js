/*global angular*/
(function(module){
    module.factory('weekdaysFactory',WeekdaysFactory);
    WeekdaysFactory.$Inject=['$http'];
    
    function WeekdaysFactory($http){
          return{
             getWeekdays:getWeekdays                 
          };
          
          function getWeekdays() {
              return $http.get('weekdays/weekdays.json');    
          }          
    }
})
(angular.module('app'))