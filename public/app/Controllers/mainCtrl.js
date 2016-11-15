app.controller("mainCtrl",["$scope","$rootScope","$state",'$mdToast',"cartFac",function($scope,$rootScope,$state, $mdToast, cartFac){

    function init(){
    var user = JSON.parse(localStorage.getItem("loggedUser"));
       if(user){
       $rootScope.userLoggedIn = user;
       $rootScope.isLoggedIn = true;
        }
    }

$scope.logOut = function(){
     $rootScope.isLoggedIn = false;
     $rootScope.userLoggedIn.name = "";
     localStorage.removeItem("loggedUser");
     $state.go('login')
}

$scope.goToCart = function(){
      if(!$scope.isLoggedIn){
          $scope.showToast('Please Login first');
      } else {
         $state.go('cart');
      }
}


 var last = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };

$scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
    sanitizePosition();

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = $scope.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }

 $scope.showToast = function(text) {

     var pinTo = $scope.getToastPosition()
    $mdToast.show(
      $mdToast.simple()
      .highlightClass('warn')
        .textContent(text)
        .position(pinTo )
        .hideDelay(3000)

    );
  };




    return init();
}]);
