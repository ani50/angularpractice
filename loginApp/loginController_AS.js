var mainApp=angular.module('mainApp', ['ngRoute']);

 // configure our routes
    mainApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : "login_AS.html"
                
            })

            .when('/dashboard', {
                resolve:{
                    "check":function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path("/error");
                        }
                    }
                },
                templateUrl: "dashboard_AS.html"
            })

            .when('/error',{
                templateUrl: "loginError_AS.html"
            });
    });

    mainApp.controller('loginCtrl',function($scope,$location,$rootScope){

        $scope.submit=function(){
            var fname=$scope.firstName;
            var lname=$scope.lastName;
            if(fname == "Aniket" && lname=="Singh"){
                $rootScope.loggedIn=true;
                $location.path('/dashboard');
            }else{
                $rootScope.loggedIn=false;
                $location.path('/error');
            }
        }

        $scope.reset = function(){
               $scope.firstName = "Aniket";
               $scope.lastName = "Singh";
               $scope.email = "aniket.itapp@gmail.com";
        }
            
        $scope.reset();
        
    });