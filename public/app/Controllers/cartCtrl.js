app.controller('cartCtrl', ['$scope', "$state", 'cartFac', '$mdDialog', "userService", function ($scope, $state, cartFac, $mdDialog, userService) {

    $scope.purchases;
    $scope.cartTotal;

    $scope.add = function () {
        cartFac.addItemToCart($scope.cartItem);
        // $scope.cartTotal = cartFac.cartItems

    }

    $scope.addUserPurchase = function () {
        userService.addUserPurchase(cartFac.cartItems, $scope.cartTotal)
            .then(function (callback) {
/*                console.log("purchases added: " + callback)*/
            }).then(function () {
             $mdDialog.show({
                templateUrl: 'app/Templates/Dialogs/receipt.html',
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                 locals: { items: cartFac.cartItems }
            });
        });
    }


    $scope.getUserPurchases = function () {
        userService.getUserPurchases().then(function (callback) {
            $scope.purchases = callback.data;
        }).then(function () {
            $mdDialog.show({
                templateUrl: 'app/Templates/Dialogs/purchasesList.html',
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
            });
        })
    }


    var getCartTotal = function () {
        var tot = 0;
        for (i of $scope.items) {
            tot =tot + i.price;
            console.log("price added : "+ tot)
        }
       $scope.cartTotal = tot
    }

    function init() {
        $scope.items = cartFac.cartItems;
        $scope.purchases;
        getCartTotal()
    }

    return init();
}]);
