app.controller("loginCtrl",["$scope","$rootScope","$state","userService",function($scope,$rootScope,$state,userService){

    //scope.users = fac1.users;


    function init(){
        $scope.userName = "";
    }



    $scope.autentication = function(){
        //simple login logic
        //check DB if user exist
       userService.getUser($scope.userName).then(function(user){
       if(!user.data){
           alert("no user found")
       } else {
           //USER FOUND
           if($scope.password == user.data.local.password){
               //Pass correct
               $rootScope.isLoggedIn = true;
               $rootScope.userLoggedIn = user.data;
               //itemsFac.loggedUser = user.data.name
                $state.go('home')
           } else {
               $scope.message = "Wrong password"
           }

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
