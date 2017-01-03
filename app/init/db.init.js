const mongoose = require('mongoose');
const config = require('../../config/default');

const connection = "mongodb://" + config.mongo.host + ":" + config.mongo.port + "/" + config.mongo.database;

module.exports = function(cb){
    mongoose.connect(connection, function(err) {
        if (err)  {
            cb(err);
        } else {
            cb();
        }

    });
}

