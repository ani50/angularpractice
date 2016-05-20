var mainApp = angular.module('mainApp', []);

mainApp.factory('random', function(){
	var randomObject={};
	var num=Math.floor(Math.random()*10);
	randomObject.generate1 = function(passingValue){
		return num*passingValue;
	}

	randomObject.generate2 = function(passingValue){
		return 2*passingValue;
	}

	return randomObject;
	
});

mainApp.controller('serviceDetail1',  function($scope,random){
	$scope.generateRandom1 = function(){
		$scope.randNo1=random.generate1(2);
	}
	
});

mainApp.controller('serviceDetail2',  function($scope,random){
	$scope.generateRandom2 = function(){
		$scope.randNo2=random.generate2(3);
	}
	
});