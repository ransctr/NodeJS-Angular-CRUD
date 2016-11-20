var mongoose    = require('./db');
var Schema      = mongoose.Schema;



// define the schema for our user model
var PurchaseSchema = new Schema({
    _id              : Schema.Types.ObjectId,
    date             : { type : Date, default: Date.now },
    items            : [{}],
    total            : Number

});

module.exports = mongoose.model('Purchase', PurchaseSchema);
