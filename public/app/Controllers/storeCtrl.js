app.controller("storeCtrl", ["$scope", "$rootScope", "storeFac", function ($scope, $rootScope, storeFac) {

$scope.inCart

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
    $scope.addToCart = function (item) {
		var cartList = storeFac.cartItems;
		for (var i = 0; i < cartList.length; i++) {
			if (cartList[i] === item) {return;} //Item exists
    	}	
        storeFac.addItemToCart(item)
        $rootScope.cartAmount = storeFac.cartItems.length;    	
    }

    //check if item added
    $scope.isItemInCart = function(id){
        var cartItems = storeFac.cartItems;
        $scope.inCart = false;
        if(cartItems.length==0)return
        for(var i =0 ; i< cartItems.length ; i++){
            if(cartItems[i].id == id){
                $scope.inCart = true
                return
            }
        }   
    }   
    
    return init();
}]);
