app.controller("loginCtrl",["$scope","$rootScope","$state","userService",function($scope,$rootScope,$state,userService){

    //scope.users = fac1.users;


    function init(){
        console.log("login ctrl")
        $scope.userName = "";
        if($rootScope.isLoggedIn){
            $state.go('home');
        }
    }


    $scope.autentication = function(){
        //simple login logic
        //check DB if user exist
       userService.getUser($scope.userName).then(function(user){
       if(user.data){
           //USER FOUND
           if($scope.password == user.data.local.password){
               //Pass correct
               $rootScope.isLoggedIn = true;
               $rootScope.userLoggedIn = user.data;
               localStorage.setItem("loggedUser", JSON.stringify(user.data));
                $state.go('home')
           } else {
               $scope.message = "Wrong password";

           }
       } else{
           //NO USER FOUND
           $scope.message = "User not exits";
       }

       })

    }

  /*  $scope.callserver = function(){
        myService.getUser().then(function(res){
            console.log(res.data);
        },function(err){
            alert(err.data)
        })
    }*/
 return init();

}])
