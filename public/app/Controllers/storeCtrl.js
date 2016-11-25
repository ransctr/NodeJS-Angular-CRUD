app.controller("storeCtrl", ["$scope", "$rootScope", "storeFac", function ($scope, $rootScope, storeFac) {



    function init() {
        //set cartAmout
        $rootScope.cartAmount = storeFac.cartItems.length;
        $scope.storePage = true;
        $scope.items = storeFac.getAllPoducts();
    }

    //Store Filters
    $scope.orderByMe = function (param) {
        $scope.myOrderBy = param;
    }


    //Add to cart actions
    $scope.addToCart = function (item, i) {
        if (!$scope.items[i].added) {
            //mark item as added
            $scope.items[i].added = true;
        } else {
            return;
        }
        storeFac.addItemToCart(item)
        $rootScope.cartAmount = storeFac.cartItems.length;

    }

    $scope.isItemInCart = function(id){
        var cartItems = storeFac.cartItems;
        var isExist = false;
        if(cartItems.length==0)return
        console.log("isItemInCart: ", id)
        //for(ci of storeFac.cartItems){
        for(var i =0 ; i< cartItems.length ; i++){
            //console.log("ci",ci)
            if(cartItems[i].id == id){
                console.log("exist in cart:", cartItems[i].id)
                return true
            }

        }
        return isExist
    }

    return init();
}]);
