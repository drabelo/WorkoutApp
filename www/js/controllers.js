angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('workoutACtrl', function (Backand, $scope, $stateParams, ItemsModelA) {
  var vm = this;
  var d = new Date();
  var n = d.getTime();
  $scope.weights = {"date" : n};

   $scope.create = function(object) {
     console.log($scope.weights)
     ItemsModelA.create($scope.weights)
         .then(function (result) {
              console.log("Success");
         }).catch(err => {
           console.log(err);
         })
  }
})

.controller('workoutBCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
