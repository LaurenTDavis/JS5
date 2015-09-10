angular.module('myApp', []);

var mainController= function ( $scope, $timeout ) {

	$scope.edit = false; 
	$scope.setText= "Hey";

	$scope.editText = function ( event ) {
		$scope.edit = !$scope.edit;
		if ( $scope.edit ) {
			$timeout(funciton(){
				document.getElementById('id').focus();
			});

		}

	}

}

angular.module('myApp').controller('mainController', ['$scope', '$timeout', mainController])
