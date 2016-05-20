var mainApp = angular.module('mainApp', []);

mainApp.controller('watch', ['$scope', function($scope){
	$scope.counter = -1;
	$scope.$watch('searchText', function(newValue, oldValue, scope) {
		$scope.counter++;
		
	});
	
}])