app.controller('cartCtrl', ['$scope',"$state", 'cartFac','$mdDialog', function($scope,$state,cartFac,$mdDialog) {

    $scope.add = function(){
        cartFac.addItemToCart($scope.cartItem);
    }



    function init(){
    $scope.items = cartFac.cartItems;
    }



    return init();
}]);
