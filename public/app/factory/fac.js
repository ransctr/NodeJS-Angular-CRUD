
app.factory("cartFac",function(){

    var cart  = {};

    cart.cartItems = [];

    cart.addItemToCart = function(item){
        cart.cartItems.push(item);
        console.log(item + " added");
        console.log("cartItems: ", cart.cartItems);

    }



    return cart;
})
