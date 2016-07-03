const config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db).connection.on('connected', function(){
       console.log('Mongoose default connection open');
    });

    require('../app/models/user.server.model');

    return db;
};