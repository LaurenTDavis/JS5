angular.module('myApp', []);

var mainController= function ( $scope ) {

	$scope.edit = false; 
	$scope.setText= "Hey";

	$scope.editText = function ( event ) {
		$scope.edit = !$scope.edit;
		if ( $scope.edit ) {
	

		}

	}

}

angular.module('myApp').controller('mainController', ['$scope', mainController])
