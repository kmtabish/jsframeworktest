var performanceTest = angular.module("performanceTest", []);

performanceTest.controller('sample', function($scope, $http){
  $scope.test = "HELLO TEST"
  $http.get("data/colorData.json").then(function(data) {
             $scope.colorData = data.data.data;
             console.log("_______", $scope.colorData)
         })
})
