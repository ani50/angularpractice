var mainApp = angular.module('mainApp', []);

mainApp.service('random', function(){
	var num=Math.floor(Math.random()*10);
	this.generate = function(passingValue){
		return num*passingValue;
	}
	
});

mainApp.controller('serviceDetail1',  function($scope,random){
	$scope.generateRandom1 = function(){
		$scope.randNo1=random.generate(2);
	}
	
});

mainApp.controller('serviceDetail2',  function($scope,random){
	$scope.generateRandom2 = function(){
		$scope.randNo2=random.generate(3);
	}
	
});