require('dotenv').config({path: __dirname + '/../../.env'});

const mongoose = require('mongoose');
const connection = "mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME;

module.exports = function(cb){
    mongoose.connect(connection, function(err) {
        if (err)  {
            cb(err);
        } else {
            cb();
        }

    });
}

