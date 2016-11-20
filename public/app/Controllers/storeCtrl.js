app.controller("storeCtrl",["$scope","$rootScope","cartFac",function($scope,$rootScope, cartFac){

     $scope.items = cartFac.allPoducts

      $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
  }

      $scope.addToCart = function(item, i){
           if(!$scope.items[i].added){
            $scope.items[i].added =true;
              } else{
                  return;
              }
          cartFac.addItemToCart(item)
          console.log(item)
          $rootScope.cartAmount = cartFac.cartItems.length;

      }


    function init(){
    $rootScope.cartAmount = cartFac.cartItems.length
    }
    return init();
}]);
