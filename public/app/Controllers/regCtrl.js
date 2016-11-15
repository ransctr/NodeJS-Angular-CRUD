app.controller("regCtrl",["$scope","$rootScope","$state","userService",function($scope,$rootScope,$state,userService){


    $scope.add = function(){
        console.log("add")
        var myUser = {
            name: $scope.name,
            password: $scope.password,
            email : $scope.email,

        }

        userService.addUser(myUser).then(function(res){
            $rootScope.isLoggedIn = true
            $state.go('home');
        },function(err){
            alert(err.data)
        })
    }



    function init(){
        /*$scope.firstName = "einav";
        $scope.showBtn = false;
        $scope.myUser = "";*/
    }
    return init();
}])
