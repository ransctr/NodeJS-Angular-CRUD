var express = require('express');
var bodyParser = require('body-parser');

var User = require('./../lib/UserModel');
var Purchase = require('./../lib/PurchaseModel');
var mongoose = require('./../lib/db');

var router = express.Router();

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());


//Get user by email
router.get('/users/getUser/:email', function (req, res) {
    User.findOne({
        'local.email': req.params.email
    }, function (err, user) {
        console.log("User found")
        res.send(user);
    });
});

//Create new user
router.post('/users/addUser', function (req, res) {
    //check if exist
    User.findOne({'local.email': req.body.email}).exec()
        .then(function (user) {
            //User Exists
            if (user) {
                console.log("Email is taken")
                res.send(false);
                return
            //User Not exist
            } else {
                //CREATE User
                User.create({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    'local.email': req.body.email,
                    'local.password': req.body.password,
                    user_purchases: []
                }).then(function (user) {
                    console.log("User Created");
                    res.send(user);
                    return
                })
            }
        }).catch(function (err) {
            console.log("DB error", err.message)
            return done(err);
        });
});

//Add user purchase
router.post('/users/addUserPurchase/:id', function (req, res) {
    //Create New purchase schema
    var purchase = new Purchase({
        _id: mongoose.Types.ObjectId(),
        items: req.body.items,
        total: req.body.total
    });
    User.findOneAndUpdate({
            "_id": req.params.id
        }, {
            "$push": {
                "user_purchases": purchase
            }
        }).then(function (data) {
            console.log("Purchase Added")
            res.send(data)
        })
        .catch(function (err) {
            console.log('DB ERROR: ', err.message);
            next(err);
        });
});

//Get all user purchases
router.get('/users/getUserPurchases/:id', function (req, res) {
    User.findOne({
        '_id': req.params.id
    }, function (err, user) {
        console.log("Purchases found: ", user.user_purchases.length)
        res.send(user.user_purchases);
    });
});


module.exports = router;
