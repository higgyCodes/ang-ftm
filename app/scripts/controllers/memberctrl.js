utahVotes.controller('memberCtrl', ['$scope', '$state', function($scope, $state){

if ($scope.authenticated = true) {
		//Will redirect if the member is already logged in...
		//$state.go('logged.welcome');
	} else {
		console.log("Didnt work")
	}

}]);