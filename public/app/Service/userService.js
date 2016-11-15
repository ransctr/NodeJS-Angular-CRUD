app.service("userService", ["$http","$rootScope", function ($http,$rootScope) {

    var service = this;

    service.getUser = function (user) {
        console.log("service call - get user: " + user);
        return $http({
            method: 'GET',
            url: '/api/users/getUser/' + user,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (user) {
            return user
        })
    }

    service.addUser = function (data) {
        return $http.post('/api/users/addUser', data)
            .success(function (data) {
                // $scope.formData = {}; // clear the form so our user is ready to enter another
                return data
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    service.addUserPurchase = function (data) {
        return $http.post('/api/users/addUserPurchase/'+$rootScope.userLoggedIn._id, data)
            .success(function (data) {
                return data

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

       service.getUserPurchases = function (data) {
        return $http.get('/api/users/getUserPurchases/'+$rootScope.userLoggedIn._id)
            .success(function (data) {
                return data
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };



    return service;
}])
