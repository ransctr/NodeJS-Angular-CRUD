var mongoose    = require('mongoose');

// set Promise provider to bluebird
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/bookStore');

var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', function () {
    console.log('MONGOOSE CONNECTION ESTABLISHED');
});

module.exports = mongoose;
