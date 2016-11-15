var app = angular.module("myApp",["ui.router","ngMaterial","ngAnimate","ngAria", "ngMessages"]);
app.config(["$urlRouterProvider","$stateProvider",function($urlRouterProvider,$stateProvider){



    $stateProvider

    .state('login',{
        url:'/login',
        templateUrl:'Views/login.html',
    })
     .state('register', {
        url:'/register',
        templateUrl:'Views/register.html',
    })

    .state('home',{
        url:'/home',
        templateUrl:'Views/home.html',

    })

        .state('store',{
        url:'/store',
        templateUrl:'Views/store.html',

    })

    .state('cart', {
        url:'/cart',
        templateUrl:'Views/cart.html',
    })

  $urlRouterProvider.otherwise('/login');
}]).run(["$rootScope","$state",function($rootScope,$state){
        $rootScope.isLoggedIn = false;

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                if(toState.name == "home" && !$rootScope.isLoggedIn   ){
                    event.preventDefault();
                    $state.go("login")
                }

            })

    }])



