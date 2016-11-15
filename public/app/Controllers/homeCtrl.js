app.controller("homeCtrl",["$scope","$rootScope","$state",'$mdDialog',"cartFac",function($scope,$rootScope,$state, $mdDialog, cartFac){


$scope.logOut = function(){
     $rootScope.isLoggedIn = false
     $scope.loggedUser = null
     $scope.userLoggedIn.name = ""
}

$scope.goToCart = function(){
      if(!$scope.isLoggedIn){
          $scope.showLoginConfirm();
      } else {
         $state.go('cart')
      }
}

 $scope.showLoginConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('You are not logged in')
          .textContent('Please login before reaching the cart')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Login')
          .cancel('Back to store');

    $mdDialog.show(confirm).then(function() {
      $state.go('login')
    }, function() {
      $state.go('store')
    });
  };



    function init(){

    }
    return init();
}]);
