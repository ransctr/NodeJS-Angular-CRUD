app.service("userService",["$http",function($http){

    var service = this;

    service.getUser = function(user){
        console.log("service call - get user: "+ user);
        return $http({
            method: 'GET',
            url: '/api/users/getUser/' + user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(user) {
                return user
            })
    }

/*      service.addUser = function(data){
        console.log("data sent: " , data);
        return $http({
            method: 'POST',
            data: data,
            url: '/api/users/addUser',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},

        });
    }*/



       service.addUser = function(data){
        return $http.post('/api/users/addUser', data)
            .success(function(data) {
               // $scope.formData = {}; // clear the form so our user is ready to enter another
                return data
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    return service;
}])
