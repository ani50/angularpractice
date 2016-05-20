var mainApp =  angular.module('mainApp', []);

mainApp.provider('workDate',function(){
    var greet;
	return {
		setGreeting: function(paramValue){
			greet = paramValue;

		},
		showMessage: function(){
			var date = new Date();
			return "Ohh lala le lo";
		},
		
		$get: function(){
			return{
				showDate: function(){
					var date = new Date();
					return greet+date.getHours();
				}
			}

		}
	}
});

mainApp.config(function(workDateProvider) {
	workDateProvider.setGreeting("Why are u taking so much time?:");
})

mainApp.controller('providerDetail', function($scope,workDate){
	$scope.getMessage = workDate.showDate();
	
});