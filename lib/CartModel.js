var mongoose    = require('./db');
var Schema      = mongoose.Schema;



// define the schema for our user model
var CartSchema = new Schema({
    _id              : Schema.Types.ObjectId,
    item_name        : String,
    item_description : String,
    item_price       : Number

});

module.exports = mongoose.model('Cart', CartSchema);
