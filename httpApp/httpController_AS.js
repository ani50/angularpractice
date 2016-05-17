var mainApp = angular.module('mainApp',[]);

mainApp.controller('peopleDetail',function($scope,$http){
   $http.get('http://localhost:8000/httpApp/database.json')
   .success(function(response){
     $scope.persons=response.records;
   })
});