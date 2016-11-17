app.controller('cartCtrl', ['$scope',"$state", 'cartFac','$mdDialog',"userService", function($scope,$state,cartFac,$mdDialog ,userService) {

    $scope.add = function(){
        cartFac.addItemToCart($scope.cartItem);
    }

    $scope.addUserPurchase = function(){
         userService.addUserPurchase(cartFac.cartItems).then(function(callback){
              console.log("purchases added: " + callback)
          });
    }



    $scope.getUserPurchases = function () {
        userService.getUserPurchases().then(function (callback) {
            console.log("purchases retrived: " + callback)
            $mdDialog.show({
                templateUrl: "app/Templates/Dialogs/purchasesList.html",
                clickOutsideToClose: true,

                fullscreen: $scope.customFullscreen //
            });
        });
    }



    function init(){
    $scope.items = cartFac.cartItems;

    }



    return init();
}]);
