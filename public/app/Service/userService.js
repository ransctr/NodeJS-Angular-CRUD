app.service("userService", ["$http", "$rootScope", function ($http, $rootScope) {

    var service = this;

    //Get user From DB
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

     //Get add new user to DB
    service.addUser = function (data) {
        return $http.post('/api/users/addUser', data)
            .success(function (userCreated) {
                return userCreated
            })
            .error(function (userCreated) {
                console.log('Error: ' + userCreated);
            });
    };

    //Add current user purchase to DB
    service.addUserPurchase = function (data, total) {
        return $http.post('/api/users/addUserPurchase/' + $rootScope.userLoggedIn._id, {
                items: data,  // Send cart data
                total: total  // Send total
            })
            .success(function (data) {
                return data
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    //Get all user purchases from DB
    service.getUserPurchases = function (data) {
        return $http.get('/api/users/getUserPurchases/' + $rootScope.userLoggedIn._id)
            .success(function (data) {
                return data
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


    return service;
}])
