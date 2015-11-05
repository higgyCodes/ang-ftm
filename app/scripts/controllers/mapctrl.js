app.controller('LayerDynamicMapsEngineCtrl', function($scope) {
  $scope.onMouseover = function(event) {
    var fillArray = ['red', 'blue', 'yellow', 'green'];
    var style = this.getFeatureStyle(event.featureId); 
    style.fillColor = fillArray[event.featureId - 1];
    style.fillOpacity = '0.8';
  };
  $scope.onMouseout = function(event) {
    var style = this.getFeatureStyle(event.featureId).resetAll();
  };
});