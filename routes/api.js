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



router.get('/users/getUser/:email', function (req, res) {

    User.findOne({
        'local.email': req.params.email
    }, function (err, user) {
        console.log("User found")
        res.send(user);
    });
});


router.post('/users/addUser', function (req, res) {
    User.findOne({
            'local.email': req.body.email
        }).exec()
        .then(function (user) {
            if (user) {
                console.log("Email is taken")
                res.send(false);
                return
            } else {
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
                }).catch(function(err){
                              console.log("DB error", err.message)
                                return done(err);
                            });

            }

        }).catch(function(err){
                              console.log("DB error", err.message)
                                return done(err);
                            });
});

router.post('/users/addUserPurchase/:id', function (req, res) {
    var purchase = new Purchase(
    {
        _id         : mongoose.Types.ObjectId(),
        items       : req.body.items,
        total       : req.body.total
    });
    User.findOneAndUpdate({
            "_id": req.params.id
        }, {
             "$push": {
                "user_purchases": purchase,
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

router.get('/users/getUserPurchases/:id', function (req, res) {

    User.findOne({
        '_id': req.params.id
    }, function (err, user) {
        console.log("purchases found: ", user.user_purchases.length)
        res.send(user.user_purchases);
    });
});



module.exports = router;
