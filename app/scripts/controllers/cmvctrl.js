utahVotes.controller('cmvCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

	var ref = new Firebase("https://utah-votes.firebaseio.com/cmventries");

	var list = $firebaseArray(ref);

	var updateList = function() {
		$scope.emptyDistricts = list
  		console.log("$scope.emptyDistricts", $scope.emptyDistricts);
	}

	list.$watch(function(event) {
		updateList();
	});

	updateList();

	$scope.entry = {
		status: "Candidate Running Status"}

	$scope.submit = function() {
		userData = $scope.authObj.$getAuth();
		$scope.entry.user = userData.facebook.displayName;
		var entry = $scope.entry.note
		// Adds notes as an array so they can be added to later
		$scope.entry.note = [{entry}];
		var file = $scope.entry
		var list = $firebaseArray(ref);
		list.$add(file).then(function(ref) {
			var id = ref.key();
			console.log("added record with id " + id);
			list.$indexFor(id); // returns location in the array
		$scope.entry = {}
		})
	}

	
    var query = ref.limitToLast(10);
	$scope.list = $firebaseArray(query);

//Ng UI Bootstrap additions

$scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };





}])