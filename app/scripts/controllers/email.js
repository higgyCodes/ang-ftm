utahVotes.controller('EmailCtrl', ['$scope', function($scope){

	$scope.email = {};

	$scope.submit = function() {

	$http({
  		method: 'POST',
  		url: '/contact-form'
		}).then(function successCallback(data) {
    // this callback will be called asynchronously
    // when the response is available
  		}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  	});

	}

}])