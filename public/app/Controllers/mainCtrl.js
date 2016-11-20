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
      if(!$rootScope.isLoggedIn){
          alert("Please login first")
      } else {
         $state.go('cart');
      }
}







    return init();
}]);
