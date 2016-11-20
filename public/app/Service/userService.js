app.service("userService", ["$http","$rootScope", function ($http,$rootScope) {

    var service = this;

    service.getUser = function (user) {
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
            .success(function (userCreated) {
                // $scope.formData = {}; // clear the form so our user is ready to enter another
                return userCreated
            })
            .error(function (userCreated) {
                console.log('Error: ' + userCreated);
            });
    };

    service.addUserPurchase = function (data , total) {
        return $http.post('/api/users/addUserPurchase/'+$rootScope.userLoggedIn._id, {items:data, total:total})
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
