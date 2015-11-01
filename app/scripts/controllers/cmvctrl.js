utahVotes.controller('cmvCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

	var ref = new Firebase("https://utah-votes.firebaseio.com/cmventries");

	$scope.entry = {
		status: "Candidate Running Status"}

	$scope.test = function() {
		var entry = $scope.entry.note
		$scope.entry.note = [{entry}];
		var file = $scope.entry
		var list = $firebaseArray(ref);
		list.$add(file).then(function(ref) {
		  var id = ref.key();
		  console.log("added record with id " + id);
		  list.$indexFor(id); // returns location in the array
	});

	$scope.entry = {
		status: "Candidate Running Status"}

	}

	
    var query = ref.limitToLast(10);
	$scope.list = $firebaseArray(query);



}])