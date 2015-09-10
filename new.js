angular.module('app', []);

var mainController = function ( $scope, $timeout ) {
	$scope.editText = function ( event ) {
		$scope.edit = !$scope.edit;
		if ( $scope.edit ) {
			$timeout(function() {
				
			})

		}

	}

}

angular.modul('app', []).controller('mainController', ['$scope', 'mainController'];