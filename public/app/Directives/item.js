
app.directive("item", function() {
    return {

        template : '<div class="store_item_wrapper"><div class="item_imageBG"><div class="item_imageCover"><a href="item.html"><img src="{{itm.img_url}}" alt=""></a></div><div class="item_bookHolderBG"></div></div><div class="item_desc"><div class="item_desc_title">{{itm.title}}</div><div class="item_desc_text"><strong>By </strong>{{itm.by}}</div></div><div class="item_buttons"><button class="item_addToCart_btn" ng-click="addToCart(itm)">$<span class="item_price">{{itm.price}}</span><i class="fa fa-cart-plus" aria-hidden="true"></i></button><button class="item_readMore_btn">Read More</button></div></div>',

    };
});
