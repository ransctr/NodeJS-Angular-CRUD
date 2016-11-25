app.directive("item", function() {
    return {
        restrict: 'A',
        /*scope : {
            itmmm : '=',
        },*/
        replace: true,
        templateUrl : 'app/Templates/Directives/item.html',
  /*      link: function(scope, element, attrs){
            console.log(element);
        },*/
/*        controller: function($scope){

        },*/
    };
});
