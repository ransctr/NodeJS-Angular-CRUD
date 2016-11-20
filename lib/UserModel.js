var mongoose    = require('./db');
var Schema      = mongoose.Schema;
var Purchase     = require('./PurchaseModel');


// define the schema for our user model
var UserSchema = new Schema({
    _id              : Schema.Types.ObjectId,
    //_date_created    : Date,
    name             : String,
    local            : {
        email        : String,
        password     : String
    },
    user_purchases      : ['Purchase'],


});

module.exports = mongoose.model('User', UserSchema);
