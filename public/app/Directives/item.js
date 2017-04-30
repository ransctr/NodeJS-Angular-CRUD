app.directive("item", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'app/Templates/Directives/item.html',
    };
});

//NOT IN USE
/*app.controller('itemCtrl', ['$scope', 'storeFac', function ($scope, storeFac) {
    $scope.addedToCart;

    function init() {
        console.log($scope.addedToCart);
    }
    
    //Add item to cart
    $scope.addItemToCart = function () {
        console.log(this.itm);
        storeFac.addItemToCart(this.itm);
        $scope.addedToCart = true;
    }
    
        //Remove item from cart
    $scope.removeItemFromCart = function () {
        storeFac.removeFromCart(this.itm);
        //getCartTotal();
        //$rootScope.cartAmount = storeFac.cartItems.length;
    }
    
    return init()
    
}]);*/

