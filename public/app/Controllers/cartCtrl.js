app.controller('cartCtrl', ['$scope','$rootScope', 'storeFac', '$mdDialog', "userService", function ($scope, $rootScope, storeFac, $mdDialog, userService) {


    function init() {
        $scope.items = storeFac.cartItems;
        $scope.purchases;
        getCartTotal()
        $scope.cartPage = true
    }

    //Remove item from cart
    $scope.removeFromCart = function (index, item) {
        storeFac.removeFromCart(index, item);
        getCartTotal();
        $rootScope.cartAmount = storeFac.cartItems.length;
    }

    //Calc cart total
    var getCartTotal = function () {
        var tot = 0;
        for (i of $scope.items) {
            tot = tot + i.price;
        }
        $scope.cartTotal = tot
    }

    //Add Current purchase after clicking 'Buy' - and add Dialog
    $scope.addUserPurchase = function () {
        userService.addUserPurchase(storeFac.cartItems, $scope.cartTotal)
            .then(function () {
                $mdDialog.show({
                    templateUrl: 'app/Templates/Dialogs/buy.html',
                    clickOutsideToClose: true,
                    scope: $scope,
                    preserveScope: true,
                    locals: {
                        items: storeFac.cartItems
                    },
                    controller: DialogController
                });
            });
    }

    //Get purchases history - show dialog with user list
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

    //Controller for Buy (addUserPurchase) dialog
    function DialogController($scope, $mdDialog, items) {
        $scope.showRecDialog = function () {
            $mdDialog.show({
                templateUrl: 'app/Templates/Dialogs/receipt.html',
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                locals: {
                    items: storeFac.cartItems
                },
                controller: DialogController
            });
        }
        //Close button
        $scope.closeDialog = function () {
            $mdDialog.hide();
        }

    }

    return init();
}]);
