(function(module)
{
    
    module.controller('weekDaysController',WeekDaysContoller);
    WeekDaysContoller.$inject=['$scope','weekdaysFactory'];
    
    function WeekDaysContoller($scope,weekdaysFactory) {
       
        $scope.Hello="Hello!";
        $scope.weekdays=[];
        $scope.day="someday";
        $scope.selectedDay=selectedDay;
        
         $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
         $scope.igor = { name: 'Igor', address: '123 Somewhere' };
         
        
        
        function selectedDay(message)
        {
            $scope.Hello=message;
        }
        
        function getWeekdays()
        {
            var promise=weekdaysFactory.getWeekdays();
            promise.then(function (data){
               $scope.weekdays=data.data; 
            });
        }
        
        function activate()
        {
            getWeekdays();
        }
        
        activate();
    }
})
(angular.module('app'))