utahVotes.controller('footCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){

 var ref = new Firebase("https://utah-votes.firebaseio.com");
$scope.authObj = $firebaseAuth(ref);
$scope.authObj.$onAuth(function(authData) {
  if (authData) {
    console.log("Logged in as:", authData.uid);
    $scope.login = "Logged in as:" + authData.facebook.displayName;
    $scope.logout = true



  } else {
    console.log("Logged out");
    $scope.login = "Logged out"
  }




});


}])
