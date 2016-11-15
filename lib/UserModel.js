var mongoose    = require('./db');
var Schema      = mongoose.Schema;
var Purchases     = require('./PurchasesModel');


// define the schema for our user model
var UserSchema = new Schema({
    _id              : Schema.Types.ObjectId,
    //_date_created    : Date,
    name             : String,
    local            : {
        email        : String,
        password     : String
    },
    user_purchases      : ['Purchases'],


});

module.exports = mongoose.model('User', UserSchema);
