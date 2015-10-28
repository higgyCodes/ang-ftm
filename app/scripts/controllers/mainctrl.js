utahVotes.controller('mainCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', 
	'$firebaseObject', 'authFactory',
	function($scope, $firebaseArray, $firebaseAuth, $firebaseObject, authFactory){
	$scope.authenticated = false
    var ref = new Firebase("https://utah-votes.firebaseio.com");
    var entries = new Firebase("https://utah-votes.firebaseio.com/entries");
	var obj = $firebaseObject(ref);
    
    obj.$loaded().then(function() {
	    
	    var authenticate = function() {
		    $scope.authObj = $firebaseAuth(ref);
		    $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {

			

			  console.log("Logged in as:", authData);
			  var success = authFactory.successful(authData, obj);
			  if (success !== undefined) {
			  	$scope.authenticated = true;
			  } else {
			  	$scope.authenticated = false;
			  	var list = $firebaseArray(entries);
				list.$add(authData).then(function(entries) {
			  	var id = entries.key();
			  	console.log("added record with id " + id);
			  	list.$indexFor(id); // returns location in the array
			  	$scope.listed = true
			});
			  }
			  console.log($scope.authenticated, success)

			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			  $scope.authenticated = false
			});
		};
	
	authenticate()
	})

}])

