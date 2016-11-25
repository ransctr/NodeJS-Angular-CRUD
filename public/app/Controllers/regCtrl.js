app.controller("regCtrl", ["$scope", "$rootScope", "$state", "userService", function ($scope, $rootScope, $state, userService) {

    //Add new user method
    $scope.submitUser = function (valid) {
        if(!valid)return
        //Get data from registration form
        var myUser = {
            name: $scope.name,
            password: $scope.password,
            email: $scope.email,
        }
        //Send add user request to server
        userService.addUser(myUser).then(function (res) {
            //request success
            if (res.data) {
                $rootScope.isLoggedIn = true
                $rootScope.userLoggedIn = res.data
                localStorage.setItem("loggedUser", JSON.stringify(res.data));
                $state.go('home');
            //request fail
            } else {
                $scope.message = "Email already Exists";
            }
        }, function (err) {
            console.log(err.data)
        })
    }

    function init() {}
    return init();
}])
