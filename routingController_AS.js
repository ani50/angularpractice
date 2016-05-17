var mainApp=angular.module('mainApp', ['ngRoute']);

 // configure our routes
    mainApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : "homepage.html"
                
            })

            // route for the about page
            .when('/about', {
                templateUrl: "about.html"
            })

            // route for the contact page
            .otherwise({
                redirectTo : '/'
            });
    });