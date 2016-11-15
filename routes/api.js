var express     = require('express');
var bodyParser  = require('body-parser');

var User        = require('./../lib/UserModel');
var Cart       = require('./../lib/CartModel');
var mongoose    = require('./../lib/db');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/users/getUser/:email', function(req, res) {

        User.findOne({'local.email' : req.params.email} , function(err, user) {
            console.log("user found",user)
            res.send(user);
});
    });


router.post('/users/addUser', function(req, res) {

        User.create({
            _id                 : mongoose.Types.ObjectId(),
            name                : req.body.name,
            'local.email'       : req.body.email,
            'local.password'    : req.body.password,
            user_cart           : []

        }).then(function(data){
            res.send(data);
        })

    });

module.exports = router;
