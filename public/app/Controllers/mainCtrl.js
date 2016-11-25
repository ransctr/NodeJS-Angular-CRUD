app.controller("mainCtrl", ["$scope", "$rootScope", "$state" , "storeFac", function ($scope, $rootScope, $state , storeFac) {

    function init() {
        //Check if user is logged in
        var user = JSON.parse(localStorage.getItem("loggedUser"));
        if (user) {
            //user logged in settings
            $rootScope.userLoggedIn = user;
            $rootScope.isLoggedIn = true;
        }
    }

    //Logout actions
    $scope.logOut = function () {
        $rootScope.isLoggedIn = false;
        $rootScope.userLoggedIn.name = "";
        localStorage.removeItem("loggedUser");
        storeFac.clearCart();
        $state.go('login')
    }

    //Go to cart actions - check if user is logged in
    $scope.goToCart = function () {
        if (!$rootScope.isLoggedIn) {
            alert("Please login first")
        } else {
            $state.go('cart');
        }
    }

    return init();
}]);
