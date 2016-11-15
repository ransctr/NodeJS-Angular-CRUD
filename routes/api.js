var express = require('express');
var bodyParser = require('body-parser');

var User = require('./../lib/UserModel');
var Purchases = require('./../lib/PurchasesModel');
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
        console.log("user found", user)
        res.send(user);
    });
});


router.post('/users/addUser', function (req, res) {

    User.create({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        'local.email': req.body.email,
        'local.password': req.body.password,
        user_purchases: []

    }).then(function (data) {
        res.send(data);
    })

});

router.post('/users/addUserPurchase/:id', function (req, res) {
    User.findOneAndUpdate({
            "_id": req.params.id
        }, {
             "$push": {
                "user_purchases": req.body
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
