utahVotes.controller('mainCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', 
	'$firebaseObject', 'authFactory', '$state',
	function($scope, $firebaseArray, $firebaseAuth, $firebaseObject, authFactory, $state){
	
		$scope.authenticated = false
	    var ref = new Firebase("https://utah-votes.firebaseio.com");
	    var entries = new Firebase("https://utah-votes.firebaseio.com/entries");
		var obj = $firebaseObject(ref);
	    
	     obj.$loaded().then(function() {
		    $scope.authObj = $firebaseAuth(ref);
	    	
	    	var authData = $scope.authObj.$getAuth();
			if (authData) {
				var success = authFactory.successful(authData, obj);
				  	console.log("This is success", success)
				  	if (success !== undefined) {
				  		console.log("This is Running")
				  		$scope.authenticated = true;
				  	}
			} else {
	  			console.log("Logged out");
			}

			//Authenticates the User with a ng-click
		    $scope.authenticate = function() {

			    $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {

				  var success = authFactory.successful(authData, obj);
				  //If User is successful user is welcomed
				  	if (success !== undefined) {
					  	$scope.authenticated = true;
					  	$state.go('logged.welcome');

				  	//If user is not authenticated, user is booted
					} else {
					  	$scope.authenticated = false;
					  	var list = $firebaseArray(entries);
						list.$add(authData).then(function(entries) {
						  	var id = entries.key();
						  	console.log("added record with id " + id);
						  	list.$indexFor(id); // returns location in the array
						  	$scope.listed = true
						  	$state.go('booted');
						});
					};
				})
			}
		})

}])

