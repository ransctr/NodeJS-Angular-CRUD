app.controller("loginCtrl", ["$scope", "$rootScope", "$state", "userService", function ($scope, $rootScope, $state, userService) {

    function init() {
        // if alerady logged in -> send to home page
        if ($rootScope.isLoggedIn) {
            $state.go('home');
        }
    }

    //Login Autentication
    $scope.autentication = function (valid) {
        if(!valid)return
        //simple autentication logic
        //check DB if user exist
        userService.getUser($scope.userName).then(function (user) {
            //USER FOUND
            if (user.data) {
                //Check password
                if ($scope.password == user.data.local.password) {
                    //Password correct
                    $rootScope.isLoggedIn = true;
                    $rootScope.userLoggedIn = user.data;
                    localStorage.setItem("loggedUser", JSON.stringify(user.data));
                    $state.go('home')
                } else {
                    //Wrong password
                    $scope.message = "Wrong password";

                }
            } else {
                //NO USER FOUND
                $scope.message = "User not exits";
            }

        })
    }

    return init();

}])
