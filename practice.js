 var app = angular.module('myapp', []);  

 app.controller("HelloController", function($scope) {
 $scope.helloTo = {};
 $scope.helloTo.title = "AngularJS";
 $scope.countries=[{locale:'en-US',name:'United States'},
 {locale:'en-GB',name:'United Kingdom'},
 {locale:'en-FR',name:'France'},
 {locale:'en-IN',name:'India'}];
 });

var studentApp = angular.module('studentApp', []); 
 studentApp.controller("StudentController", function($scope) {

 });

 angular.element(document).ready(function() {
           angular.bootstrap(document.getElementById("id2"), ['studentApp']);
  });