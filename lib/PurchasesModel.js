var mongoose    = require('./db');
var Schema      = mongoose.Schema;



// define the schema for our user model
var PurchasesSchema = new Schema({
    _id              : Schema.Types.ObjectId,
    purchase         : {}

});

module.exports = mongoose.model('Purchases', PurchasesSchema);
