app.factory("storeFac", function () {

    var store = {};

    //Cart Items
    store.cartItems = [];

    //Poducts list - private
    allPoducts = [
        {
            id: 43432,
            title: "Born to Run",
            by: "Bruce Springsteen",
            descr: "Every little kid who's ever taken the mound in Little League dreams of someday getting the ball for Game Seven of the World Series. Ron Darling got to live that dream - only it ",
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51hnB7FEgcL._SX327_BO1,204,203,200_.jpg",
            price: 500.96,
                },
        {
            id: 43567,
            title: "Not Dead Yet: The Memoir",
            by: "Phil Collins",
            descr: `They were coming off a seemingly endless string of losing records. They were considered years away from legitimate contention. They were derided and disregarded as a matter of `,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/515SxnLlnlL._SX327_BO1,204,203,200_.jpg",
            price: 15.98
                },
        {
            id: 45785,
            title: "The Girl with the Lower Back Tattoo",
            by: "Erik Sherman",
            descr: `<b>In 1986, the bad guys of baseball won the World Series. Now, Erik Sherman, the <i>New York Times</i> bestselling coauthor of <i>Mookie</i>, profiles key players from that `,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51dWGbt2yOL.jpg",
            price: 17.98
                },
        {
            id: 45782,
            title: "Scrappy Little Nobody",
            by: "Anna Kendrick",
            descr: `A collection of humorous autobiographical essays by the Academy Award-nominated actress and star of Up in the Air and Pitch Perfect.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51OpzkJNL3L._SX324_BO1,204,203,200_.jpg",
            price: 14.98
                },
        {
            id: 42780,
            title: "Guinness World Records 2017",
            by: "Guinness World Records",
            descr: `The ultimate annual book of records is back and crammed with more than ever before! Guinness World Records 2017 is bursting with all-new records on topics as diverse as black holes, domes, owls, and killer plants. Want to know the highest anyone has travelled on a skateboard`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/61ka0AzGWBL._SX377_BO1,204,203,200_.jpg",
            price: 21.98
                },
        {
            id: 42732,
            title: "Forever Words: The Unknown Poems",
            by: "Johnny Cash",
            descr: `A collection of never-before-published poems by Johnny Cash, edited and introduced by Pulitzer-prize winning poet Paul Muldoon with a foreword by John Carter Cash.  Illustrated with facsimile reproductions of Cash's own handwritten pages.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/41HrGQhTPFL.jpg",
            price: 12.00
                },
          {
            id: 42332,
            title: "Faithful: A Novel",
            by: "Alice Hoffman",
            descr: `From the New York Times bestselling author of The Marriage of Opposites and The Dovekeepers comes a soul-searching story about a young woman struggling to redefine herself and the power of love, family, and fate.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51DJaun7yjL._SX329_BO1,204,203,200_.jpg",
            price: 17.00
                },
         {
            id: 42330,
            title: "Victoria: A novel",
            by: "Daisy Goodwin",
            descr: `Drawing on Queen Victoria’s diaries, which she first started reading when she was a student at Cambridge University, Daisy Goodwin―creator and writer of the new PBS/Masterpiece drama Victoria and author of the bestselling novels The American Heiress and The Fortune Hunter―brings the young nineteenth-century monarch, who would go on to reign for 63 ye`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51FRawx0HuL._SX328_BO1,204,203,200_.jpg",
            price: 19.00
                },
         {
            id: 32330,
            title: "Born a Crime: Stories from a South African Childhood",
            by: "Trevor Noah",
            descr: `The compelling, inspiring, and comically sublime story of one man’s coming-of-age, set during the twilight of apartheid and the tumultuous days of freedom that followed`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51OaVVwllhL._SX327_BO1,204,203,200_.jpg",
            price: 28.00
                },
          {
            id: 32332,
            title: "Cross the Line (Alex Cross)",
            by: "James Patterson",
            descr: `In all of Alex Cross's years with Homicide, Washington, DC, has never been more dangerous.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/51ba699jSlL._SX319_BO1,204,203,200_.jpg",
            price: 21.50
                },
         {
            id: 31132,
            title: "Harry Potter and the Cursed Child",
            by: "J.K. Rowling",
            descr: `Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on July 30, 2016.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/518VhA3dH9L._SX329_BO1,204,203,200_.jpg",
            price: 17.99
                },
         {
            id: 32230,
            title: "Fantastic Beasts and Where to Find Them",
            by: "J.K. Rowling",
            descr: `J.K. Rowling's screenwriting debut is captured in this exciting hardcover edition of the Fantastic Beasts and Where to Find Them screenplay.`,
            img_url: "https://images-na.ssl-images-amazon.com/images/I/61kS08bR-EL._SX311_BO1,204,203,200_.jpg",
            price: 11.50
                },

         ];

    //Get all products
    store.getAllPoducts = function(){
        return allPoducts;
    }

    //Push item to cart
    store.addItemToCart = function (item) {
        store.cartItems.push(item);
    }

    //Remove item from cart
    store.removeFromCart = function (index, itm) {
        /*remove from array*/
        store.cartItems.splice(index, 1)
            /*Remove added from all products*/
        for (prod of allPoducts) {
            if (itm.id === prod.id) {
                prod.added = false;
            }
        }
    }

    store.clearCart = function(){
        store.cartItems = [];
        //Remove added from all products
         for (prod of allPoducts) {
                prod.added = false;
        }
    }

    return store;
})
