app.controller("regCtrl",["$scope","$rootScope","$state","userService",function($scope,$rootScope,$state,userService){


    $scope.add = function(){
        var myUser = {
            name: $scope.name,
            password: $scope.password,
            email : $scope.email,
        }

        userService.addUser(myUser).then(function(res){
            if(res.data){
                $rootScope.isLoggedIn = true
                $rootScope.userLoggedIn = res.data
                 localStorage.setItem("loggedUser", JSON.stringify(res.data));
                $state.go('home');
            } else {
                $scope.message = "Email already Exists"   ;
            }
        },function(err){
            console.log(err.data)
        })
    }



    function init(){
        /*$scope.firstName = "einav";
        $scope.showBtn = false;
        $scope.myUser = "";*/
    }
    return init();
}])
