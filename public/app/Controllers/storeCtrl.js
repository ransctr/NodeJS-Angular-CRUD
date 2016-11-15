app.controller("storeCtrl",["$scope","$rootScope","cartFac",function($scope,$rootScope, cartFac){

     $scope.items = [
                {
                    id:43432,
                    title:"Born to Run",
                    by:"Bruce Springsteen",
                    descr:"Every little kid who's ever taken the mound in Little League dreams of someday getting the ball for Game Seven of the World Series. Ron Darling got to live that dream - only it ",
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/51hnB7FEgcL._SX327_BO1,204,203,200_.jpg",
                    price:500.96
                },
                {
                    id:43567,
                    title:"Not Dead Yet: The Memoir",
                    by:"Phil Collins",
                    descr:`They were coming off a seemingly endless string of losing records. They were considered years away from legitimate contention. They were derided and disregarded as a matter of `,
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/515SxnLlnlL._SX327_BO1,204,203,200_.jpg",
                    price:15.98
                },
                {
                    id:45785,
                    title:"The Girl with the Lower Back Tattoo",
                    by:"Erik Sherman",
                    descr:`<b>In 1986, the bad guys of baseball won the World Series. Now, Erik Sherman, the <i>New York Times</i> bestselling coauthor of <i>Mookie</i>, profiles key players from that `,
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/51dWGbt2yOL.jpg",
                    price:17.98
                },
                {
                    id:45782,
                    title:"Scrappy Little Nobody",
                    by:"Anna Kendrick",
                    descr:`A collection of humorous autobiographical essays by the Academy Award-nominated actress and star of Up in the Air and Pitch Perfect.`,
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/51OpzkJNL3L._SX324_BO1,204,203,200_.jpg",
                    price:14.98
                },
                {
                    id:42780,
                    title:"Guinness World Records 2017",
                    by:"Guinness World Records",
                    descr:`The ultimate annual book of records is back and crammed with more than ever before! Guinness World Records 2017 is bursting with all-new records on topics as diverse as black holes, domes, owls, and killer plants. Want to know the highest anyone has travelled on a skateboard`,
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/61ka0AzGWBL._SX377_BO1,204,203,200_.jpg",
                    price:21.98
                },
                {
                    id:42732,
                    title:"Forever Words: The Unknown Poems",
                    by:"Johnny Cash",
                    descr:`A collection of never-before-published poems by Johnny Cash, edited and introduced by Pulitzer-prize winning poet Paul Muldoon with a foreword by John Carter Cash.  Illustrated with facsimile reproductions of Cash's own handwritten pages.`,
                    img_url: "https://images-na.ssl-images-amazon.com/images/I/41HrGQhTPFL.jpg",
                    price:12.00
                },
         ]

      $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
  }

      $scope.addToCart = function(item){
          cartFac.addItemToCart(item)
          //set cart items amount
          $rootScope.cartAmount = cartFac.cartItems.length
      }

    function init(){
    $rootScope.cartAmount = 0
    }
    return init();
}]);
